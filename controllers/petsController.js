const knex = require("knex")(require("../knexfile"));

// GET functions
// GET all pets by user
function getPets(req, res) {
  const userId = req.params.userId;
  const querySearch = req.query.s;
  const sortBy = req.query.sort_by;
  const orderBy = req.query.order_by || "asc";

  let query = knex("pets")
    .select(
      "id",
      "user_id",
      "name",
      "birth_date",
      "type",
      "breed",
      "bio",
      "created_at"
    )
    .where({ user_id: userId });

  if (querySearch) {
    const searchTerm = querySearch.toLowerCase();
    query = query.where((builder) =>
      builder
        .whereRaw("LOWER(name) LIKE ?", `%${searchTerm}%`)
        .orWhereRaw("LOWER(type) LIKE ?", `%${searchTerm}%`)
        .orWhereRaw("LOWER(breed) LIKE ?", `%${searchTerm}%`)
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

// Get a single pet by id
function getSinglePet(req, res) {
  const userId = req.params.userId;
  const petId = req.params.petId;

  knex("pets")
    .select(
      "id",
      "user_id",
      "name",
      "birth_date",
      "type",
      "breed",
      "bio",
      "created_at"
    )
    .where({ "pets.user_id": userId })
    .andWhere({ "pets.id": petId })
    .then((result) => {
      if (result.length === 0) {
        return res.status(404).send({
          message: `User ID / Pet ID ${userId} / ${petId} not found.`,
        });
      }

      return res.status(200).json(result[0]);
    })
    .catch((err) => {
      // Console.log shows the error only on the server side
      console.log(
        `getSinglePet: Error retrieving data for the pet ID ${petId} ${err}`
      );
      return res
        .status(400)
        .send(`Error retrieving data for the pet ID ${petId}`);
    });
}

// POST functions
// Add a new Pet
function postPet(req, res) {
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

// DELETE
// Delete pet by user id/pet id
// TODO: not implemented *****
function deletePet(req, res) {
  if (!Number(req.params.userId) || !Number(req.params.petId)) {
    return res.status(404).json({
      message: `User ID and Service ID should be a number.`,
    });
  }
  knex("user_services")
    .where({ user_id: req.params.id })
    .andWhere({ id: req.params.srvId })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({
          message: `User / Service with ID: ${req.params.id} / ${req.params.srvId} to be deleted not found.`,
        });
      }
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Unable to delete service" });
    });
}
// PUT
// Edit User
function editPet(req, res) {
  const userId = req.params.id;

  knex("users")
    .where({ id: userId })
    .update(req.body)
    .then((user) => {
      if (user === 0) {
        return res
          .status(404)
          .json({ message: `User with ID ${userId} not found` });
      }
      return knex("users")
        .select(
          "first_name",
          "last_name",
          "birth_date",
          "address",
          "city",
          "country",
          "email",
          "phone",
          "type",
          "bio"
        )
        .where({
          id: userId,
        });
    })
    .then((updatedUser) => {
      res.status(200).json(updatedUser[0]);
    })
    .catch((err) => {
      // Console.log shows the error only on the server side
      console.log(`editUser: Unable to update user with ID: ${userId} ${err}`);
      res.status(500).json({
        message: `Unable to update user with ID: ${userId}`,
      });
    });
}

// Validate body message
function validateBody(req, res, next) {
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

  // Filter out keys that are not present in requiredFields
  const filteredFields = Object.keys(req.body)
    .filter((key) => requiredFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = req.body[key];
      return obj;
    }, {});

  // Validate requiredFields
  for (const field of requiredFields) {
    if (!filteredFields[field]) {
      return res.status(400).json({ message: `Please provide ${field}` });
    }
  }

  // Validate user type: client, provider, admin
  const userType = filteredFields.type;
  const userTypes = ["client", "provider", "admin"];
  if (!userTypes.includes(userType)) {
    return res
      .status(400)
      .json({ message: `Please provide a valide user type: ${userType}` });
  }

  // Validate email and phone
  const phoneMask = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
  const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneMask.test(filteredFields.phone)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid phone number" });
  }

  if (!emailMask.test(filteredFields.email)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid email address" });
  }

  // Validate birth date
  const birthDateMask =
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!birthDateMask.test(filteredFields.birth_date)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid birth date" });
  }
  req.body = { ...filteredFields };
  next();
}

module.exports = {
  postPet,
  deletePet,
  editPet,
  getPets,
  getSinglePet,
  validateBody,
};
