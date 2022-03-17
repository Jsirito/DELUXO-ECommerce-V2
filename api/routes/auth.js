const express = require("express");
const authRouter = express.Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
    console.log(savedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//LOGIN
authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username.value,
    });

    //Check if there is user
    !user && res.status(401).send("Wrong User Name");

    //Crete JWT
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    //Hash user pass
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password.value;

    //Check if pass match
    if (originalPassword != inputPassword) {
      res.status(401).send("Wrong Password");
    } else {
      //Deconstruct user to send everythig but the pass
      const { password, ...others } = user._doc;
      res.status(200).send({ ...others, accessToken });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = authRouter;
