import { responseCode, responseMessage } from "../../../config/constant"
import { comparePassword, decodeToken, decrypt, encrypt, generateToken, hashPassword } from "../../utils/bcrypt"
import jwt_decode from "jwt-decode";
import { sendEmail } from "../../utils/mailer"
import { generateOtp, responseMethod } from "../../utils/validation"
import { getUserService, signUpService, updateUserService } from "../user/service"
import { logoutAllService, logoutService, userLoginService } from "./service"

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
    let passwordMatched = await comparePassword(req.body.password, user.password)
    if (!passwordMatched) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.INCORRECT_PASSWORD,
        false, {}
      )
    }
    const accessToken = await generateToken({ userId: user._id })
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

export const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email.trim()?.toLowerCase()
    const user = await getUserService({ email })
    if (!user) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.USER_NOT_FOUND,
        false, {}
      )
    }
    const otp = generateOtp()
    const payload = {
      to: req.body.email.trim()?.toLowerCase(),
      subject: 'OTP received to reset password',
      text: `You OTP to reset password for account ${email} is ${otp}. Please don't disclose.`
    }
    sendEmail(payload)
    let token = await generateToken({ otp, email, expirationTime: new Date().setMinutes(new Date().getMinutes() + 3) })
    token = await encrypt(token)
    return responseMethod(
      res,
      responseCode.OK,
      responseMessage.OTP_SENT,
      true,
      { token }
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

export const setPassword = async (req, res) => {
  try {
    let token = await decrypt(req.body.token)
    token = jwt_decode(token)
    if (new Date(token.expirationTime) < new Date()) {
      return responseMethod(
        res,
        responseCode.NO_LONGER_AVAILABLE,
        responseMessage.OTP_EXPIRED,
        false, {}
      )
    } else if (token.otp != req.body.otp) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.INVALID_OTP,
        false, {}
      )
    }
    const password = await hashPassword(req.body.password)
    const user = await updateUserService({ email: token.email }, { password })
    if (!user) {
      return responseMethod(
        res,
        responseCode.BAD_REQUEST,
        responseMessage.BAD_REQUEST,
        false, {}
      )
    }
    await logoutAllService({ userId: user._id })
    return responseMethod(
      res,
      responseCode.OK,
      responseMessage.PASSWORD_CHANGED,
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