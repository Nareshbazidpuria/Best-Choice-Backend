import { sign } from "jsonwebtoken"
import { responseCode, responseMessage } from "../../../config/constant"
import { comparePassword, hashPassword } from "../../utils/bcrypt"
import { responseMethod } from "../../utils/validation"
import { getUserService, signUpService } from "../user/service"
import { logoutService, userLoginService } from "./service"

export const signUp = async (req, res) => {
  try {
    req.body.email = req.body.email.trim()?.toLowerCase()
    const existingUser = await getUserService({ email: req.body.email.trim()?.toLowerCase() })
    if (existingUser) {
      return responseMethod(
        res,
        responseCode.CONFLICT,
        responseMessage.USER_EXIST,
        true, {}
      )
    }
    req.body.password = await hashPassword(req.body.password?.trim())
    const user = await signUpService(req.body)
    if (user) {
      return responseMethod(
        res,
        responseCode.CREATED,
        responseMessage.SIGNUP,
        true, {}
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

export const login = async (req, res) => {
  try {
    const user = await getUserService({ email: req.body.email.trim()?.toLowerCase() })
    if (!user) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.USER_NOT_FOUND,
        false, {}
      )
    }
    let passwordMatched = comparePassword(req.body.password, user.password)
    if (!passwordMatched) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.INCORRECT_PASSWORD,
        false, {}
      )
    }
    const accessToken = sign({ userId: user._id }, process.env.JWT_SECRET)
    const auth = await userLoginService({ userId: user._id, accessToken })
    if (!auth) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.BAD_REQUEST,
        false, {}
      )
    }
    return responseMethod(
      res,
      responseCode.OK,
      responseMessage.LOGIN_SUCCESS,
      true,
      { accessToken }
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

export const logout = async (req, res) => {
  try {
    const auth = await logoutService({ accessToken: req.headers.token })
    if (!auth) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.BAD_REQUEST,
        false, {}
      )
    }
    return responseMethod(
      res,
      responseCode.OK,
      responseMessage.LOGGED_OUT,
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