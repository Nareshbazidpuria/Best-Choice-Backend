import { model, Schema } from "mongoose";
import { categoriesEnum, sizeEnum } from "../../config/constant";

const product = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: Object.values(categoriesEnum)
  },
  size: {
    type: String,
    enum: Object.values(sizeEnum)
  },
  color: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  image: {
    type: String
  },
  ratings: {
    type: Number
  },
})

export const Product = model('products', product)