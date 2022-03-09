const express = require("express");
const userRouter = express.Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
const User = require("../models/Users");

//UPDATE
userRouter.put("/:id", verifyTokenAndAuth, async (req, res) => {
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

//DELETE
userRouter.delete(
  "/deleteUserById/:id",
  verifyTokenAndAdmin,
  async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("User deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//GET USER BY ID
userRouter.get("/findUser/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).send({ others });
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET ALL USERS
userRouter.get("/findAllUsers", verifyTokenAndAdmin, async (req, res) => {
  //Query for new Users
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET USER STATS
userRouter.get("/findUserStats", verifyTokenAndAdmin, async (req, res) => {
  //Will find total numer of users created per months
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      //Pass the condition (createdAt must be greater than lastYear)
      { $match: { createdAt: { $gte: lastYear } } },
      {
        //Take month numbersSeen
        $project: {
          //take the month number inside the createdAt date
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          //Id of the month
          _id: "$month",
          //Sum every register user in that month to give a total users registred in that month
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = userRouter;
