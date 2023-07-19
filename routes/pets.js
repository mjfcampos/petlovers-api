const router = require("express").Router();
const petsController = require("../controllers/petsController");

const { postPet, deletePet, editPet, getPets, getSinglePet, validateBody } =
  petsController;

/*
 * GET
 */
router.get("/:userId", getPets).get("/:userId/:petId", getSinglePet);

/*
 * POST
 */
router.post("/:userId", validateBody, postPet);

/*
 * DELETE
 */
router.delete("/:userId/:petId", deletePet);

/*
 * PUT
 */
router.put("/:userId/:petId", validateBody, editPet);

module.exports = router;
