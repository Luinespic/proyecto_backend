const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, password, role, image } = req.body;

    const newUser = new User({ name, email, password, role, image });
    await newUser.save();

    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};

module.exports = { createUser };
