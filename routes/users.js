const router = require("express").Router();
const usersController = require("../controllers/usersController");

const {
  postUser,
  deleteUser,
  editUser,
  getUsers,
  getSingleUser,
  validateBody,
} = usersController;

/*
 * GET Users
 */
router.get("/", getUsers).get("/:id", getSingleUser);

/*
 * POST User
 */
router.post("/", validateBody, postUser);

/*
 * DELETE User
 */
router.delete("/:id", deleteUser);

/*
 * PUT User
 */
router.put("/:id", validateBody, editUser);

module.exports = router;
