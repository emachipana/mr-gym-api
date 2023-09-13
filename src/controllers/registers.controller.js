import Register from "../models/Register.js";
import User from "../models/User.js";

export const getAllRegisters = async (_req, res) => {
  try {
    const registers = await Register.find();

    res.status(200).json(registers);
  }catch(e){
    console.error(e);

    res.status(500).json(e);
  }
}

export const getRegister = async (req, res) => {
  const { id } = req.params;

  try {
    const register = await Register.findById(id);

    if(!register) return res.status(404).json({ message: "El Registro no existe" });

    res.status(200).json(register);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const getMyClientRegisters = async (req, res) => {
  const { user } = req;

  try {
    const allRegisters = await Register.find();
    const myRegisters = allRegisters.filter(register => user._id.equals(register.user[0]));

    res.status(200).json(myRegisters);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const createRegister = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    const newRegister = new Register({ user: user.id });

    const registerSaved = await newRegister.save();

    res.status(201).json(registerSaved);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const updateRegister = async (req, res) => {
  const { exit, takes, isGetBack } = req.body;
  const { id } = req.params;

  try {
    const updatedRegister = await Register.findByIdAndUpdate(
      id,
      { exit, takes, isGetBack },
      { new: true }
    );

    if(!updatedRegister) return res.status(404).json({ message: "El registro no existe" });

    res.status(200).json(updatedRegister);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}

export const deleteRegister = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRegister = await Register.findByIdAndDelete(id);

    if(!deletedRegister) return res.status(404).json({ message: "El registro no se encontró" });

    res.status(204).json();
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
