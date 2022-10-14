
const { userValidation } = require('../middleware/validation/user.validation')
const { singnUp, singnIn, emailVerify } = require('../services/user.service')

const app = require('express').Router()



app.post('/singnUp'  , userValidation, singnUp)
app.post('/singnIn' ,     singnIn)
app.get('/verify/:token' , emailVerify)







module.exports = app
















