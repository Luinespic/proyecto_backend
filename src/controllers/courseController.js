const Course = require("../models/Course");

const createCourse = async (req, res) => {
  try {
    const { title, description, price, level, technologies } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "La imagen del curso es obligatoria" });
    }

    const imageUrl = req.file.path || req.file.secure_url || req.file.url;

    const newCourse = new Course({
      title,
      description,
      price,
      level,
      technologies,
      image: imageUrl,
    });

    await newCourse.save();

    res
      .status(201)
      .json({ message: "Curso creado exitosamente", course: newCourse });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el curso", error: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los cursos", error: error.message });
  }
};

module.exports = { createCourse, getAllCourses };
