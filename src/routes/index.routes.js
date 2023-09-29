import { Router } from "express";

const router = Router();

// index route
router.get("/", (_req, res) => {
  res.json({
    message: "Bienvenido al API del gimnasio Mr. Gym",
    routes: {
      Auth: {
        SignIn: "/auth/signin",
        SignUp: "/auth/signup"
      },
      Plan: {
        GetPlans: "/plans",
        GetPlanById: "/plans/:id",
        CreatePlan: "/plans",
        UpdatePlan: "/plans/:id",
        DeletePlan: "/plans/:id"
      },
      Register: {
        GetRegisters: "/registers",
        GetRegisterById: "/registers/:id",
        GetClientRegisters: "/registers/client/myRegisters",
        CreateRegister: "/registers",
        UpdateRegister: "/registers/:id",
        DeleteRegister: "/registers/:id"
      },
      User: {
        GetUsers: "/users",
        GetUserById: "/users/:id",
        GetClientProfile: "/users/info/profile",
        CreateUser: "/users",
        UpdateUser: "/users/:id",
        DeleteUser: "/users/:id"
      }
    }
  });
});

export default router;
