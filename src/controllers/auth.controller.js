import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { SECRET } from "../../config.js";
import { createUser } from "./users.controller.js";

export const signInHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if(!user) return res.status(401).json({ message: "Usuario o contraseña inválidos, f" });

    const matchPassword = await User.comparePassword(password, user.password);
    if(!matchPassword)
      return res.status(401).json({ message: "Usuario o contraseña inválidos" });

    user = user.toJSON();
  
    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: "7d" // expires in 7 days
    });

    res.status(200).json({ token, ...user });
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const signUpHandler = async (req, res) => {
  try {
    req.isToSignUp = true;
    let newUser = await createUser(req, res);

    if(!newUser) 
      return res
                .status(400)
                .json({ message: "Ocurrió un problema, vuelve a intentarlo" });

    newUser = newUser.toJSON();

    const token = jwt.sign({ id: newUser.id }, SECRET, {
      expiresIn: "7d"
    });

    res.status(201).json({ token, ...newUser });
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
