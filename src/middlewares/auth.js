const User = require("../models/User");
const { verifyToken } = require("../utils/jwtUtil");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No has iniciado sesión" });
    }

    const verified = verifyToken(token);
    if (!verified) {
      return res.status(401).json({ message: "No autorizado" });
    }

    const user = await User.findById(verified.id);
    if (!user) {
      return res.status(404).json({ message: "El usuario ya no existe" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "No autorizado", error: error.message });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      message: "Acceso denegado: Se requieren permisos de Administrador",
    });
  }
};

module.exports = { isAuth, isAdmin };
