import { config } from "dotenv";

// init config
config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3001;
