const router = require("express").Router();
const userController = require('../controllers/userController')

router.get("/", userController.index);
router.post("/create", userController.store);
router.get("/:id", userController.show);
router.put("/:id/update", userController.update);
router.delete("/:id/delete", userController.delete);

module.exports = router;
