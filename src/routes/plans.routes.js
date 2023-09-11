import { Router } from "express";
import { 
  createPlan,
  deletePlan,
  getAllPlans,
  getPlan,
  updatePlan} from "../controllers/plans.controller.js";
import { isAdmin, verifyToken } from "../middlewares/auth.js";

const router = Router();

// GET - all plans
router.get("/", getAllPlans);

// GET - one plan
router.get("/:id", getPlan);

// POST - create plan
router.post("/", [ verifyToken, isAdmin ], createPlan);

// PATCH - update plan
router.patch("/:id", [ verifyToken, isAdmin ], updatePlan);

// DELETE - one plan
router.delete("/:id", [ verifyToken, isAdmin ], deletePlan);

export default router;
