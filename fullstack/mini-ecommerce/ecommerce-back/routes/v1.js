import { Router } from "express";
import authRouter from "./auth.js";
import productRouter from "./products.js";
import orderRouter from "./order.js";
import managingProductsRouter from "./managingProducts.js";
import { isAdmin, isLoggedIn, verifyCredentials } from "../middlewares/auth.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);

v1Router.use(verifyCredentials);
v1Router.use("/products", productRouter);
v1Router.use("/orders", isLoggedIn, orderRouter);
v1Router.use("/admin/products", isLoggedIn, isAdmin, managingProductsRouter);

export default v1Router;
