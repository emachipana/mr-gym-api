import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if(!token) return res.status(401).json({ message: "Token no encontrado" });

  try {
    const decoded = jwt.verify(token, SECRET);
    const { id } = decoded.id;
    req.id = id;

    const user = await User.findById(id);
    if(!user) return res.status(404).json({ message: "El usuario no existe" });

    next();
  }catch(e){
    res.status(401).json({ message: "No autorizado" });
  }
}
