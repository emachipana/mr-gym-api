import { Router } from "express";
import { signInHandler, signUpHandler } from "../controllers/auth.controller.js";
import { checkingExistingUser } from "../middlewares/verifySignUp.js";

const router = Router();

router.use((_req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

// POST - sig nup
router.post("/signup", [ checkingExistingUser ], signUpHandler);

// POST - sign in
router.post("/signin", signInHandler);

export default router;
