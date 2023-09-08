import express from "express";
import indexRoute from "./routes/index.routes.js";
import plansRoutes from "./routes/plans.routes.js";
import registersRoutes from "./routes/registers.routes.js";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import morgan from "morgan";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/", indexRoute);
app.use("/plans", plansRoutes);
app.use("/registers", registersRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

export default app;
