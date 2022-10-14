
const joi = require('joi')
const method  = ['body' , 'params']

const schema = {
    body: joi.object({
            name:joi.string().min(3).max(15).required(),
            email:joi.string().email().required(),
            password: joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
            repassword: joi.ref('password'),
            age:joi.number().min(16).max(60)
        }),
    params: joi.object({
        id: joi.string().min(4).max(4)
    })
}

module.exports.userValidation=(req , res , next)=> {
    const errorArray = []
    method.map((key)=> {
        const {error} =   schema[key].validate(req[key],  {abortEarly: false})
        if (error) {
          error.details.map((msg)=> {
             errorArray.push({message: msg.message})  
          })
        } 
    })

    if (errorArray.length>0) {
        res.json(errorArray)
    } else {
        next()
    }
}







