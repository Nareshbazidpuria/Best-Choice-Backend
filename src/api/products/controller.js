import { responseCode, responseMessage } from "../../../config/constant"
import { responseMethod } from "../../utils/validation"
import { addProductService, getProductsService } from "./service"

export const addProduct = async (req, res) => {
  try {
    const product = await addProductService(req.body)
    if (product) {
      return responseMethod(
        res,
        responseCode.CREATED,
        responseMessage.PRODUCT_ADDED,
        true,
        product
      )
    }
    return responseMethod(
      res,
      responseCode.BAD_REQUEST,
      responseMessage.BAD_REQUEST,
      false, {}
    )
  } catch (error) {
    console.log(error);
    return responseMethod(
      res,
      responseCode.INTERNAL_SERVER_ERROR,
      responseMessage.INTERNAL_SERVER_ERROR,
      false, {}
    )
  }
}
export const getProducts = async (req, res) => {
  try {
    const products = await getProductsService({})
    if (products.length) {
      return responseMethod(
        res,
        responseCode.OK,
        responseMessage.PRODUCT_GET_SUCCESS,
        true,
        products
      )
    }
    return responseMethod(
      res,
      responseCode.NO_CONTENT,
      responseMessage.NOT_FOUND,
      true, {}
    )
  } catch (error) {
    console.log(error);
    return responseMethod(
      res,
      responseCode.INTERNAL_SERVER_ERROR,
      responseMessage.INTERNAL_SERVER_ERROR,
      false, {}
    )
  }
}
