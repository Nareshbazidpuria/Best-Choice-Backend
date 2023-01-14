require('@babel/register')
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { connectToMongodb } = require('./config/mongoDb')
const { apiRouter } = require('./src/routes/apiRoutes')
const { ValidationError } = require('express-validation')
const { validationErrorMessageConverter, responseMethod } = require('./src/utils/validation')
const { responseCode, responseMessage } = require('./config/constant')
const { publicRouter } = require('./src/routes/publicRoutes')
const { authenticate } = require('./src/middleware/authenticate')
connectToMongodb()
const port = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', authenticate, apiRouter)
app.use('/pub', publicRouter)

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return validationErrorMessageConverter(req, res, err)
  }
  return responseMethod(res, responseCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR, false, {});
})

app.listen(port, () => {
  console.log('App is listening at', port)
})
