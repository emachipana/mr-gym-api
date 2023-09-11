import { Router } from "express";
import { 
  createPlan,
  deletePlan,
  getAllPlans,
  getPlan,
  updatePlan} from "../controllers/plans.controller.js";

const router = Router();

// GET - all plans
router.get("/", getAllPlans);

// GET - one plan
router.get("/:id", getPlan);

// POST - create plan
router.post("/", createPlan);

// PATCH - update plan
router.patch("/:id", updatePlan);

// DELETE - one plan
router.delete("/:id", deletePlan);

export default router;
