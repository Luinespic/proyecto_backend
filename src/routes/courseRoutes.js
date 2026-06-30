const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const { upload } = require("../middlewares/upload");

router.post("/", upload.single("image"), courseController.createCourse);
router.get("/", courseController.getAllCourses);

module.exports = router;
