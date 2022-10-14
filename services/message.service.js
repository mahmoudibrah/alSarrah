

const messageModel = require('../models/message.model');


module.exports.addMsg = async(req , res)=> {
    const {message , userId} = req.body;
     await messageModel.insertMany({message , userId});
     res.json({message: 'success  insert message'})
}

module.exports.getMsg = async(req , res)=> {
    // const { userId} = req.body;
    const  message  =  await messageModel.find({userId : req.userId} , {message:1 , _id:0});
    if (message.length>0) {
        res.json({message: 'success' , message })
    } else {
        res.json({message: 'no message' })
    }


}














