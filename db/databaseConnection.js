
const mongoose = require('mongoose')



module.exports.dbConnection = (req , res)=> {
    mongoose.connect(process.env.CONNECTION_SRAT).then(()=>{
        console.log( 'connection database' )
    }).catch((err)=>{
        console.log( 'error connection database' , err)
    })
}














