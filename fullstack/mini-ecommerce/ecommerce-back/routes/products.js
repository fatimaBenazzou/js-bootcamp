import { Router } from "express";
import { getProducts } from "../controllers/products.js";

const productRouter = Router();

productRouter.get("/", getProducts);

export default productRouter;
