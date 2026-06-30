const multer = require("multer");
const { cloudinary } = require("../config/cloudinary");
const multerCloudinary = require("multer-storage-cloudinary");
const CloudinaryStorage =
  multerCloudinary.CloudinaryStorage || multerCloudinary;

const storage = new CloudinaryStorage({
  cloudinary: { v2: cloudinary },
  params: {
    folder: "course_images",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

module.exports = upload;
