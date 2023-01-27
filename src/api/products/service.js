import { Product } from "../../models/product"

export const addProductService = (body) => {
  return Product.create(body)
}

// export const getProductService = (filter) => {
//   return Product.findOne(filter)
// }

// export const logoutService = (filter) => {
//   return Product.findOneAndDelete(filter)
// }

// export const logoutAllService = (filter) => {
//   return Product.deleteMany(filter)
// }