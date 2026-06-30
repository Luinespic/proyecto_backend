const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const { connectDB } = require("./config/db");
const { connectCloudinary } = require("./config/cloudinary");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
