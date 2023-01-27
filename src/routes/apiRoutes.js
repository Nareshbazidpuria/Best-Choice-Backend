import { Router } from "express";
import { authRouter } from "../api/auth/route";
import { productRouter } from "../api/products/route";
import { profileRouter } from "../api/profile/route";

export const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/profile', profileRouter)
apiRouter.use('/product', productRouter)