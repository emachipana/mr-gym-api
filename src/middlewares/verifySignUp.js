import User from "../models/User.js"

export const checkingExistingUser = async (req, res, next) => {
  const { dni, email } = req.body;

  try {
    const userByEmail = await User.findOne({ email: email });
    if(userByEmail) return res.status(406).json({ message: "El email ya está en uso" });
    
    const userByDni = await User.findOne({ dni: dni });
    if(userByDni) return res.status(406).json({ message: "El DNI ya está en uso" });

    next();
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
