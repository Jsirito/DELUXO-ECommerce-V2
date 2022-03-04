const express = require("express");
const userRouter = express.Router();
const { verifyTokenAndAuth } = require("./verifyToken");
const User = require("../models/Users");

userRouter.put("/:id", verifyTokenAndAuth(), async (req, res) => {
  //Check if there is a pass to update adn encrypt again
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }
  //Updating
  try {
    const updatedUser = await User.findByIdAndUpdate(
      //Id to update
      req.params.id,
      //Info to update user
      {
        $set: req.body,
      },
      //Return updated user
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = userRouter;
