const { auth } = require('../middleware/authentication/auth')
const { addMsg, getMsg } = require('../services/message.service')


const app = require('express').Router()


app.post('/addMessage' , addMsg)
app.get('/getMessage' , auth , getMsg)






module.exports = app
