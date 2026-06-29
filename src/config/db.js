const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectdb = await mongoose.connect(process.env.DB_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB: ", error);
  }
};

module.exports = { connectDB };
