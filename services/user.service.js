const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const { sendEmail } = require("../email/user.email");

module.exports.singnUp = async (req, res) => {
  const { name, email, password, age } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    res.json({ message: "Account already exists " });
  } else {
    bcrypt.hash(password, Number(process.env.ROUND), async function (err, hash) {
      await userModel.insertMany({ name, email, password: hash, age });
      let token = jwt.sign({ email }, "secretKey" , { expiresIn: 60 * 60 });
      sendEmail({ email, token, message: "hello" });
      res.json({ message: "success" }); 
    });
  }
};

module.exports.singnIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      let token = jwt.sign(
        { userId: user._id, name: user.name, emailConfirm: user.emailConfirm },
        process.env.JWT_KEY
      );
        if (user.emailConfirm == true) {
          res.json({ message: "success login", token });
        } else {
          res.json({message:'verify your email first'})
        }

    } else {
      res.json({ message: "password inccorect" });
    }
  } else {
    res.json({ message: "Account dose't exist " });
  }
};

module.exports.emailVerify = async (req, res) => {
  const { token } = req.params;
  jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
    if (err) {
      res.json(err);
    } else {
      const user = await userModel.findOne({ email: decoded.email });
      if (user) {
        await userModel.findOneAndUpdate(
          { email: decoded.email },
          { emailConfirm: true }
        );
        res.json({ message: "verified" });
      } else {
        res.json({ message: "user not found" });
      }
    }
  });
};
