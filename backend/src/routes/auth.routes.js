import { Router } from "express";
import {
  signInCtrl,
  signOutCtrl,
  validateSessionCtrl,
} from "../controllers/auth.controllers.js";
import { validateJwt } from "../middlewares/validar-jwt.js";

const authRouter = Router();

// Endpoint de inicio de sesión (login)
authRouter.post("/sign-in", signInCtrl);

// Endpoint de cierre de sesión (logout)
authRouter.post("/sign-out", signOutCtrl);

// Endpoint para validar la sesión
authRouter.get("/session", validateJwt, validateSessionCtrl);

export { authRouter };
