import { Router } from "express";
import { preference } from "../controllers/pays.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

router.post("/preferences", [verifyToken], preference);

export default router;
