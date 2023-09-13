import { Router } from "express";
import { 
  createRegister,
  deleteRegister,
  getAllRegisters,
  getMyClientRegisters,
  getRegister, 
  updateRegister} from "../controllers/registers.controller.js";
import { isAdmin, verifyToken } from "../middlewares/auth.js";
import { isOwnerOrAdmin } from "../middlewares/verifyAtCreate.js";

const router = Router();

// GET - all registers
router.get("/", [ verifyToken, isAdmin ], getAllRegisters);

// GET - one register
router.get("/:id", [ verifyToken, isOwnerOrAdmin ], getRegister);

// GET - my client registers
router.get("/client/myRegisters", [ verifyToken ], getMyClientRegisters);

// POST - create register
router.post("/", [ verifyToken ], createRegister);

// PATCH - update register
router.patch("/:id", [ verifyToken ], updateRegister);

// DELETE - one register
router.delete("/:id", [ verifyToken, isAdmin ], deleteRegister);

export default router;
