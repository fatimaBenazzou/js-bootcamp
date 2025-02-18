import { Router } from "express";
import authRouter from "./auth.js";
import productRouter from "./products.js";
import orderRouter from "./order.js";
import { isLoggedIn, verifyCredentials } from "../middlewares/auth.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);

v1Router.use(verifyCredentials);
v1Router.use("/products", productRouter);
v1Router.use("/orders", isLoggedIn, orderRouter);
export default v1Router;
