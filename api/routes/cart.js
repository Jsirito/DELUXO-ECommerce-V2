const express = require("express");
const cartRouter = express.Router();
const Cart = require("../models/Cart");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuth,
} = require("./verifyToken");

//CREATE CART
cartRouter.post("/newCart", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE CART
cartRouter.put("/:id", verifyTokenAndAuth, async (req, res) => {
  //Updating Cart
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      //Id to update
      req.params.id,
      //Info to update Cart
      {
        $set: req.body,
      },
      //Return updated Cart
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE CART
cartRouter.delete(
  "/deleteCartById/:id",
  verifyTokenAndAuth,
  async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).send("Cart deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//GET USER CART BY ID
cartRouter.get(
  "/findCartById/:userId",
  verifyTokenAndAuth,
  async (req, res) => {
    try {
      const findedCart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).send(findedCart);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// //GET ALL CARTS
cartRouter.get("/findAllCarts", verifyTokenAndAdmin, async (req, res) => {
  try {
    const findedCarts = await Cart.find();
    res.status(200).send(findedCarts);
  } catch (err) {
    res.status(500).send(er);
  }
});

module.exports = cartRouter;
