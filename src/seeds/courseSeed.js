const mongoose = require("mongoose");
const Course = require("../models/Course");

const initialCourses = [
  {
    title: "Desarrollo Web Full Stack con MERN",
    description:
      "Aprende a crear aplicaciones modernas utilizando MongoDB, Express, React y Node.js desde cero.",
    price: 49.99,
    level: "Intermediate",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
  },
  {
    title: "Introducción a JavaScript Moderno",
    description:
      "Domina las bases de JS, ES6+, promesas, asincronía y manipulación del DOM.",
    price: 19.99,
    level: "Beginner",
    technologies: ["JavaScript", "HTML", "CSS"],
    image:
      "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
  },
  {
    title: "Arquitectura de APIs Robustas con Node.js",
    description:
      "Aprende patrones de diseño, testing, seguridad avanzada y despliegue de microservicios.",
    price: 79.99,
    level: "Advanced",
    technologies: ["Node.js", "Express", "TypeScript", "Docker"],
    image:
      "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
  },
];

const runSeed = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lucia:lucia123456@cluster0.eafpqv3.mongodb.net/plataforma-cursos?appName=Cluster0",
    );
    console.log("Conectado a MongoDB para ejecutar la seed...");

    await Course.collection.drop();
    console.log("Colección de cursos vaciada con éxito.");

    await Course.insertMany(initialCourses);
    console.log("¡Cursos de la semilla insertados con éxito!");
  } catch (error) {
    console.error("Error al ejecutar la seed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Desconectado de MongoDB de forma segura.");
  }
};

runSeed();
