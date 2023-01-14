import { Router } from "express";
import { authRouter } from "../api/auth/route";
import { profileRouter } from "../api/profile/route";

export const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/profile', profileRouter)