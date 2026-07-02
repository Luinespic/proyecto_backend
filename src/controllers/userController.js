const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtUtil");

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "La imagen de perfil es obligatoria" });
    }

    const imageUrl = req.file.path || req.file.secure_url || req.file.url;
    const imageId = req.file.filename || req.file.public_id;

    const newUser = new User({
      name,
      email,
      password,
      role,
      image: imageUrl,
      imgID: imageId,
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userInDB = await User.findOne({ email });
    if (!userInDB) {
      return res.status(404).json({
        message: "El correo electrónico o la contraseña no son correctos",
      });
    }

    const isValidPassword = bcrypt.compareSync(password, userInDB.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: "El correo electrónico o la contraseña no son correctos",
      });
    }

    const token = generateToken(userInDB._id);

    userInDB.password = null;

    return res.status(200).json({
      message: "Login exitoso",
      token,
      user: userInDB,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al iniciar sesión", error: error.message });
  }
};

module.exports = { createUser, getAllUsers, loginUser };
