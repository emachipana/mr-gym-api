import { Router } from "express";

const router = Router();

router.use((_req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

// POST - sig nup
router.post("/signup");

// POST - sign in
router.post("/signin");

export default router;
