const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "La imagen de perfil es obligatoria" });
    }

    const imageUrl = req.file.path || req.file.secure_url || req.file.url;

    const newUser = new User({
      name,
      email,
      password,
      role,
      image: imageUrl,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

module.exports = { createUser, getAllUsers };
