import { Router } from "express";
import pkg from "../../package.json" assert { type: "json" };

const router = Router();

// index route
router.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la API del gimnasio Mr. Gym",
    name: "Mr. Gym API",
    version: pkg.version,
    author: pkg.author
  });
});

export default router;
