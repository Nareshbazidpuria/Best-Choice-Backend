import { Joi } from 'express-validation'

export const signUpValidation = {
  body: Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
  })
}

export const loginValidation = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
  })
}