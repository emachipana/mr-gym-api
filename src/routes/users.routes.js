import { Router } from "express";

const router = Router();

// GET - all users
router.get("/");

// GET - one user
router.get("/:id");

// POST - create user
router.post("/");

// PATCH - update user
router.patch("/:id");

// DELETE - one user
router.delete("/:id");

export default router;
