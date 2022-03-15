const express = require("express");
const ordersRouter = express.Router();
const Order = require("../models/Order");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuth,
} = require("./verifyToken");

//CREATE ORDER
ordersRouter.post("/newOrder", verifyToken, async (req, res) => {
  console.log("ASDASD")
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE ORDER
ordersRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  //Updating Order
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      //Id to update
      req.params.id,
      //Info to update Order
      {
        $set: req.body,
      },
      //Return updated Order
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE ORDER
ordersRouter.delete(
  "/deleteOrderById/:id",
  verifyTokenAndAdmin,
  async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).send("Order deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//GET USER ORDER BY ID
ordersRouter.get(
  "/findOrderById/:userId",
  verifyTokenAndAuth,
  async (req, res) => {
    try {
      const findedOrders = await Order.find({ userId: req.params.userId });
      res.status(200).send(findedOrders);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//GET ALL ORDERS
ordersRouter.get("/findAllOrders", verifyTokenAndAdmin, async (req, res) => {
  try {
    const findedOrders = await Order.find();
    res.status(200).send(findedOrders);
  } catch (err) {
    res.status(500).send(er);
  }
});

// GET MONTHLY INCOME

ordersRouter.get("/income", verifyTokenAndAdmin, async (req, res) => {
  //Get current date, last and previous month
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      //Condition to get the last two month
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      //Group by in per month
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = ordersRouter;
