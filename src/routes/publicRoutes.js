import { Router } from "express";
import { validate } from "express-validation";
import { login, signUp } from "../api/auth/controller";
import { loginValidation, signUpValidation } from "../api/auth/validation";

export const publicRouter = Router()

publicRouter.post('/signup', validate(signUpValidation), signUp)
publicRouter.post('/login', validate(loginValidation), login)