import { Router } from "express";

const router = Router();

// GET - all plans
router.get("/");

// GET - one plan
router.get("/:id");

// POST - create plan
router.post("/");

// PATCH - update plan
router.patch("/:id");

// DELETE - one plan
router.delete("/:id");

export default router;
