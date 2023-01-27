import { Joi } from 'express-validation'

export const addProductsValidation = {
  body: Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    category: Joi.string().valid('Shoes', 'Shirt', 'T Shirt', 'Pent', 'Lower', 'Electronics'),
    size: Joi.string().valid('S', 'M', 'L', 'XL', 'XXL', 'XXXL'),
    color: Joi.string().valid('Red', 'White', 'Black', 'Blue', 'Yellow', 'Grey'),
    price: Joi.number(),
    quantity: Joi.number(),
    image: Joi.string(),
    ratings: Joi.array(),
  })
}
