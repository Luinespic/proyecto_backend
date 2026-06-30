const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El título del curso es obligatorio"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "La descripción del curso es obligatoria"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "La imagen del curso es obligatoria"],
  },
  price: {
    type: Number,
    required: [true, "El precio del curso es obligatorio"],
    min: [0, "El precio del curso no puede ser negativo"],
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: [true, "El nivel del curso es obligatorio"],
  },
  technologies: {
    type: [String],
    required: [true, "Las tecnologías del curso son obligatorias"],
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
