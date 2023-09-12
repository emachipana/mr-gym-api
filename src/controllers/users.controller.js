import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUsers = async (_req, res) => {
  try {
    let users = await User.find();

    users = {
      admins: users.filter(user => user.user_type === "admin"),
      clients: users.filter(user => user.user_type === "client")
    }

    res.status(200).json(users);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if(!user) return res.status(404).json({ message: "El usuario no existe" });

    res.status(200).json(user);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const createUser = async (req, res) => {
  const { user = {}, isToSignUp = false } = req;
  const { 
    email,
    name,
    last_name,
    dni,
    password,
    user_type,
    phone,
    address } = req.body;

  try {
    if(
      user_type
      && user_type === "admin"
      && user.user_type !== "admin")
      return res.status(401).json({ message: "Necesitas ser administrador, para crear mas administradores" });

    // instance new user
    const newUser = new User({
      email,
      name,
      last_name,
      dni,
      password,
      user_type: user_type || "client",
      phone,
      address
    });

    // saving new user
    const savedUser = await newUser.save();

    if(isToSignUp) return savedUser;

    res.status(201).json(savedUser);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const updateUser = async (req, res) => {
  const { user } = req;
  const { id } = req.params;
  let { password } = req.body;

  try {
    const validate = await User.isOwnerOrAdmin(user.id, user.user_type, id);
    if(validate.validation) return res.status(401).json({ message: validate.message });

    if(password) password = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...req.body, password },
      { new: true }
    );

    res.status(200).json(updatedUser);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const deleteUser = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  try {
    const validate = await User.isOwnerOrAdmin(user.id, user.user_type, id);
    if(validate.validation) return res.status(401).json({ message: validate.message });
    
    const deletedUser = await User.findByIdAndDelete(id);

    if(!deletedUser) return res.status(404).json({ message: "El usuario no existe" });

    res.status(204).json();
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
