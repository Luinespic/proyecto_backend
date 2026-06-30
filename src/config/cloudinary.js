const cloudinary = require("cloudinary");

const connectCloudinary = () => {
  try {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Conectado a Cloudinary");
  } catch (error) {
    console.log("Error al conectar a Cloudinary: ", error);
  }
};

module.exports = { connectCloudinary, cloudinary };
