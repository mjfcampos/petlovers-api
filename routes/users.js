const router = require("express").Router();
const usersController = require("../controllers/usersController");

const {
  postUser,
  deleteUser,
  editUser,
  getUsers,
  getSingleUser,
  getUserServices,
  postUserService,
  deleteUserService,
  validateBody,
} = usersController;

/*
 * GET
 */
router
  .get("/", getUsers)
  .get("/:id", getSingleUser)
  .get("/:id/services", getUserServices);

/*
 * POST
 */
router.post("/", validateBody, postUser).post("/:id/service", postUserService);

/*
 * DELETE
 */
router
  .delete("/:id", deleteUser)
  .delete("/:id/service/:srvId", deleteUserService);

/*
 * PUT
 */
router.put("/:id", validateBody, editUser);

module.exports = router;
