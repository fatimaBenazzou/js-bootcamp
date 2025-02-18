import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.js";

const authRouter = Router();
authRouter.get("/");
authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);

export default authRouter;
