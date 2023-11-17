import { PORT } from "../config.js";
import app from "./app.js";
import "./database/db.js";
import { createAdmin } from "./libs/setup.js";
import "./libs/mercadoPago.js";

// create admin
createAdmin();

// server listen port 3001
app.listen(PORT);
console.log("Server is running on port", PORT);
