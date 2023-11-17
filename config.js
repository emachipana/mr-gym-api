import { config } from "dotenv";

// init config
config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3001;
export const SECRET = process.env.SECRET;
export const MERCADO_PAGO_TOKEN = process.env.MERCADO_PAGO_TOKEN;

// admin info
export const ADMIN_INFO = {
  email: process.env.ADMIN_EMAIL || "",
  name: process.env.ADMIN_NAME || "",
  last_name: process.env.ADMIN_LAST_NAME || "",
  dni: process.env.ADMIN_DNI || "",
  password: process.env.ADMIN_PASSWORD || "",
  phone: process.env.ADMIN_PHONE || ""
}
