import { Router } from "express";

const router = Router();

// GET - all registers
router.get("/");

// GET - one register
router.get("/:id");

// POST - create register
router.post("/");

// PATCH - update register
router.patch("/:id");

// DELETE - one register
router.delete("/:id");

export default router;
