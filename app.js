require('dotenv').config()
const express = require('express')
const { dbConnection } = require('./db/databaseConnection')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/user' , require('./api/user.api'))
app.use('/message' , require('./api/message.api'))

dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))









