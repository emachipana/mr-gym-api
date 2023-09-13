import { Router } from "express";
import { 
  createUser,
  deleteUser,
  getProfile,
  getUser,
  getUsers,
  updateUser } from "../controllers/users.controller.js";
import { isAdmin, verifyToken } from "../middlewares/auth.js";
import { checkingExistingUser } from "../middlewares/verifySignUp.js";
import { isOwnerOrAdmin } from "../middlewares/verifyAtCreate.js";

const router = Router();

// GET - all users
router.get("/", [ verifyToken, isAdmin ], getUsers);

// GET - one user
router.get("/:id", [ verifyToken, isOwnerOrAdmin ], getUser);

// GET - profile
router.get("/info/profile", [ verifyToken ], getProfile);

// POST - create user
router.post("/", [ checkingExistingUser ,verifyToken, isAdmin ], createUser);

// PATCH - update user
router.patch("/:id", [ verifyToken, isOwnerOrAdmin ], updateUser);

// DELETE - one user
router.delete("/:id", [ verifyToken, isOwnerOrAdmin ], deleteUser);

export default router;
