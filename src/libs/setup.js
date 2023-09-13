import { ADMIN_INFO } from "../../config.js"
import User from "../models/User.js"

export const createAdmin = async () => {
  // check for an existing admin user
  const userFound = await User.findOne({ email: ADMIN_INFO.email });

  if(userFound) return console.log("Admin already exists");

  // create admin user
  const newUser = await User.create({
    ...ADMIN_INFO,
    user_type: "admin"
  });

  console.log(`Admin created: ${newUser.email}`);
}
