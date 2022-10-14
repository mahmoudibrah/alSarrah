

const nodemailer = require("nodemailer");


module.exports.sendEmail = async(options)=> {
    let transporter = nodemailer.createTransport({

        service: 'gmail', // true for 465, false for other ports // sender
        auth: {
          user: 'engmahmoudmern@gmail.com', // generated ethereal user
          pass: `ynifayupfefqjihf`, // generated ethereal password
        },
      });
    transporter.sendMail({
        from: '"teacher mahmoud" <engmahmoudmern@gmail.com>', // sender address
        to: options.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `
        <img src="https://www.google.com/search?q=%D9%85%D8%B5%D8%B7%D9%81%D9%89+%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%AF%D9%8A&oi=ddle&ct=207425636&hl=ar&sa=X&ved=0ahUKEwja9_n6tNb6AhWNwYUKHbgYCiMQPQgC"></img>
        <div style="background:#bbb;color:#fff; padding: 50px;">
        <h1>${options.message}</h1>
        <a href="http://localhost:3000/user/verify/${options.token}">verify</a>
    </div>
        `, // html body
      }, (error , info)=> {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
      });
    
}











