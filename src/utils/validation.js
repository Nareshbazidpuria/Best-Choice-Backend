export const responseMethod = ( res, status, message, success, data ) => {
  return res.status(status).send({
    success: success,
    status: status,
    message: message,
    data: data,
  })
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const errorMessageConverter = (msg) => {
  if( msg[0] === '"' ){
    return msg.split( msg.slice( msg.indexOf('"'), msg.lastIndexOf('"') + 1 )).join( capitalizeFirstLetter( msg.slice( msg.indexOf('"') + 1, msg.lastIndexOf('"'))))
  }
}

export const validationErrorMessageConverter = (req, res, err) => {
  if(err?.details?.body?.length){
    return responseMethod(
      res, 
      err?.statusCode, 
      errorMessageConverter(err?.details?.body[0]?.message), 
      false, {}
    )
  }
  else if (err?.details?.query?.length){
    return responseMethod(
      res, 
      err?.statusCode, 
      errorMessageConverter(err?.details?.query[0]?.message), 
      false, {}
    )
  }
  return responseMethod(
    res, 
    400, 
    "Validation error", 
    false, {}
  )
}