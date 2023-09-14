import express from "express";
import indexRoute from "./routes/index.routes.js";
import plansRoutes from "./routes/plans.routes.js";
import registersRoutes from "./routes/registers.routes.js";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { PORT } from "../config.js";

const app = express();

// settings
app.set("port", PORT);
app.set("json spaces", 4);

// middlewares
app.use(
  cors({
    origin: "http://localhost:3000" // until deploy
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRoute);
app.use("/plans", plansRoutes);
app.use("/registers", registersRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

export default app;
