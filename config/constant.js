export const responseCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  IM_USED: 226,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  NO_LONGER_AVAILABLE: 410,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  NOT_EXTENDED: 510,
};

export const responseMessage = {
  BAD_REQUEST: "Bad request.",
  NOT_FOUND: "Record not found",
  INTERNAL_SERVER_ERROR: "Oops!! Something went wrong. Please try again.",
  INVALID_OBJECTID: "Record not found for given input",
  TOKEN_NOT_PROVIDED: 'Token is required',
  INVALID_TOKEN: 'Invalid Token',
  AUTHENTICATION_FAILED: 'Authentication failed',
  UNAUTHORIZED: 'You are not authorized to access this service.',
  SIGNUP: 'Signup success.',
  USER_EXIST: 'Email already exists. Please try another',
  USER_NOT_FOUND: 'There is no any account associated with this email.',
  INCORRECT_PASSWORD: 'Incorrect password.',
  LOGIN_SUCCESS: 'Logged in successfully.',
  OTP_SENT: 'OTP sent successfully.',
  OTP_EXPIRED: 'OTP expired. Please resend.',
  INVALID_OTP: 'Invalid OTP.',
  PASSWORD_CHANGED: 'Password changed successfully.',
  LOGGED_OUT: 'Logged out successfully.',
  PROFILE_GET_SUCCESS : 'Profile get successfully.',
  PRODUCT_ADDED : 'Product added successfully.',
  PRODUCT_GET_SUCCESS : 'Products listing.',
};

export const statusEnum = {
  ACTIVE: "active", 
  INACTIVE: "inActive", 
};

export const sizeEnum = {
  S: "S", 
  M: "M", 
  L: "L", 
  XL: "XL", 
  XXL: "XXL", 
  XXXL: "XXXL", 
};

export const categoriesEnum = {
  SHOES: "Shoes", 
  SHIRT: "Shirt", 
  T_SHIRT: "T Shirt", 
  PENT: "Pent", 
  LOWER: "Lower", 
  ELECTRONICS: "Electronics", 
};

export const colorEnum = {
  RED: "Red", 
  WHITE: "White", 
  BLACK: "Black", 
  BLUE: "Blue", 
  YELLOW: "Yellow", 
  GREY: "Grey", 
};