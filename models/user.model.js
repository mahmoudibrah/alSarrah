
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    emailConfirm: {
        type: Boolean,
        default: false,
    },
    age:Number
})


module.exports = mongoose.model('user' , schema)















