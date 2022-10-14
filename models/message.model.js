const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    message: String,
    userId: mongoose.SchemaTypes.ObjectId
})


module.exports = mongoose.model('message' , schema)