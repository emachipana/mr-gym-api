import { Router } from "express";
import { 
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser } from "../controllers/users.controller.js";
import { isAdmin, verifyToken } from "../middlewares/auth.js";

const router = Router();

// GET - all users
router.get("/", [ verifyToken, isAdmin ], getUsers);

// GET - one user
router.get("/:id", [ verifyToken ], getUser);

// POST - create user
router.post("/", createUser);

// PATCH - update user
router.patch("/:id", [ verifyToken ], updateUser);

// DELETE - one user
router.delete("/:id", [ verifyToken ], deleteUser);

export default router;
