import { Router } from "express";

const router = Router();

// index route
router.get("/", (_req, res) => {
  res.json({
    message: "Bienvenido a la API del gimnasio Mr. Gym"
  });
});

export default router;
