const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/upload");

router.post("/", upload.single("image"), userController.createUser);
router.get("/", userController.getAllUsers);

module.exports = router;
