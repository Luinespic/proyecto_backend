const multer = require("multer");
const multerCloudinary = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinary");

const CloudinaryStorage =
  multerCloudinary.CloudinaryStorage || multerCloudinary;

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "course_images",
    allowedFormats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

module.exports = { upload };
