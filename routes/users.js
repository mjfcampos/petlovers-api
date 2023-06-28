const router = require("express").Router();
const usersController = require("../controllers/usersController");

const { postUser, deleteUser, editUser, getUsers, getSingleUser } =
  usersController;

/*
 * GET Users
 */
router.get("/", getUsers);
router.get("/:id", getSingleUser);

/*
 * POST User
 */
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);

module.exports = router;
