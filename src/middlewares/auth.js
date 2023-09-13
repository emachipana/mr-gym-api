import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if(!token) return res.status(401).json({ message: "Inicia sesión primero" });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { id } = decoded;
    
    const user = await User.findById(id);
    if(!user) return res.status(404).json({ message: "El usuario no existe" });
    req.user = user;

    next();
  }catch(e){
    console.error(e);

    res.status(401).json({ message: "No autorizado" });
  }
}

export const isAdmin = async (req, res, next) => {
  const { user } = req;

  try {
    if(user.user_type === "admin") return next();

    res.status(401).json({ message: "Necesitas ser administrador para realizar esta acción" });
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
