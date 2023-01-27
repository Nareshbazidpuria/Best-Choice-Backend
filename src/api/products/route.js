import { Router } from "express";
import { validate } from "express-validation";
import { addProduct } from "./controller";
import { addProductsValidation } from "./validation";

export const productRouter = Router()

productRouter.post('/', validate(addProductsValidation), addProduct)