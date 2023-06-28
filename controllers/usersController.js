const knex = require("knex")(require("../knexfile"));

// GET functions
// GET all users
function getUsers(req, res) {
  const querySearch = req.query.s;
  const sortBy = req.query.sort_by;
  const orderBy = req.query.order_by || "asc";

  let query = knex("users").select(
    "id",
    "first_name",
    "last_name",
    "birth_date",
    "address",
    "city",
    "country",
    "email",
    "phone",
    "type",
    "bio",
    "created_at"
  );

  if (querySearch) {
    const searchTerm = querySearch.toLowerCase();
    query = query.where((builder) =>
      builder
        .whereRaw("LOWER(first_name) LIKE ?", `%${searchTerm}%`)
        .orWhereRaw("LOWER(last_name) LIKE ?", `%${searchTerm}%`)
        .orWhereRaw("LOWER(bio) LIKE ?", `%${searchTerm}%`)
    );
  }

  if (sortBy) {
    query = query.orderBy(sortBy, orderBy);
  }

  query.then((data) => {
    if (data.length === 0 && querySearch) {
      res.status(404).json({ message: `No match for ${querySearch}` });
    } else {
      res.status(200).json(data);
    }
  });
}

// Get a single user by id
function getSingleUser(req, res) {
  const userId = req.params.id;

  knex("users")
    .select(
      "id",
      "first_name",
      "last_name",
      "birth_date",
      "address",
      "city",
      "country",
      "email",
      "phone",
      "type",
      "bio",
      "created_at"
    )
    .where({ "users.id": userId })
    .then((result) => {
      if (result.length === 0) {
        return res
          .status(404)
          .send({ message: `User ID ${userId} not found.` });
      }

      return res.status(200).json(result[0]);
    })
    .catch((err) => {
      // Console.log shows the error only on the server side
      console.log(
        `getSingleUser: Error retrieving data for the User ID ${userId} ${err}`
      );
      return res
        .status(400)
        .send(`Error retrieving data for the User ID ${userId}`);
    });
}

// POST functions
// Add a new User
function postUser(req, res) {
  // Check if the body has all required fields
  const requiredFields = [
    "first_name",
    "last_name",
    "birth_date",
    "address",
    "city",
    "country",
    "email",
    "phone",
    "type",
    "bio",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `Please provide ${field}` });
    }
  }

  // Validate user type: client, provider, admin
  const userType = req.body.type;
  const userTypes = ["client", "provider", "admin"];
  if (!userTypes.includes(userType)) {
    return res
      .status(400)
      .json({ message: `Please provide a valide user type: ${userType}` });
  }

  // Validate email and phone
  const phoneMask = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
  const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneMask.test(req.body.phone)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid phone number" });
  }

  if (!emailMask.test(req.body.email)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid email address" });
  }

  // Validate birth date
  const birthDateMask =
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!birthDateMask.test(req.body.birth_date)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid birth date" });
  }

  knex("users")
    .insert(req.body)
    .then((result) => {
      return knex("users").where({ id: result[0] }).first();
    })
    .then((createdUser) => {
      const updatedData = { ...createdUser };
      delete updatedData.created_at;
      delete updatedData.updated_at;
      res.status(201).json(updatedData);
    })
    .catch((err) => {
      // Console.log shows the error only on the server side
      console.log(`postUser: Unable to create a new user ${err}`);
      res.status(500).json({ message: "Unable to create a new user" });
    });
}

// Delete an Inventory Item
function deleteUser(req, res) {
  knex("users")
    .where({ id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({
          message: `User with ID: ${req.params.id} to be deleted not found.`,
        });
      }
      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to delete user" });
    });
}

// Edit an Inventory Item
function editUser(req, res) {
  const requiredFields = [
    "first_name",
    "last_name",
    "birth_date",
    "address",
    "city",
    "country",
    "email",
    "phone",
    "type",
    "bio",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `Please provide ${field}` });
    }
  }

  // Validate user type: client, provider, admin
  const userType = req.body.type;
  const userTypes = ["client", "provider", "admin"];
  if (!userTypes.includes(userType)) {
    return res
      .status(400)
      .json({ message: `Please provide a valide user type: ${userType}` });
  }

  // Validate email and phone
  const phoneMask = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
  const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneMask.test(req.body.phone)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid phone number" });
  }

  if (!emailMask.test(req.body.email)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid email address" });
  }

  // Validate birth date
  const birthDateMask =
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!birthDateMask.test(req.body.birth_date)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid birth date" });
  }

  return res.status(200).send("Exit...");
}

module.exports = {
  postUser,
  getUsers,
  deleteUser,
  editUser,
  getSingleUser,
};
