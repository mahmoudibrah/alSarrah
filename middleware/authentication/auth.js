
const jwt  = require('jsonwebtoken')

module.exports.auth = (req , res , next) => {
    const token = req.header('token');
    jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
        if (err) {
            res.json({message: 'error in verify jwt' , err})
        } else {
            req.userId = decoded.userId
            next()
        }
    });
}










