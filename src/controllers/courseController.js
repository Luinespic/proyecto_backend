const Course = require("../models/courseModel");

const createCourse = async (req, res) => {
  try {
    const { title, description, image, price, level, technologies } = req.body;

    const newCourse = new Course({
      title,
      description,
      image,
      price,
      level,
      technologies,
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
