const express = require("express");
const cartRouter = express.Router();
const Cart = require("../models/Cart")
const { verifyTokenAndAdmin } = require("./verifyToken");

//CREATE Cart
cartRouter.post("/newCart", verifyTokenAndAdmin, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

// //UPDATE Cart
// cartRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   //Updating Cart
//   try {
//     const updatedCart = await Cart.findByIdAndUpdate(
//       //Id to update
//       req.params.id,
//       //Info to update Cart
//       {
//         $set: req.body,
//       },
//       //Return updated Cart
//       { new: true }
//     );
//     res.status(200).send(updatedCart);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// //DELETE Cart
// cartRouter.delete(
//   "/deleteCartById/:id",
//   verifyTokenAndAdmin,
//   async (req, res) => {
//     try {
//       await Cart.findByIdAndDelete(req.params.id);
//       res.status(200).send("Cart deleted");
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   }
// );

// //GET Cart BY ID
// cartRouter.get("/findCartById/:id", async (req, res) => {
//   try {
//     const findedCart = await Cart.findById(req.params.id);
//     res.status(200).send(findedCart);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// //GET ALL CartS
// cartRouter.get("/findAllCarts", async (req, res) => {
//   const queryNew = req.query.new;
//   const queryCategory = req.query.category;
//   try {
//     let findedCarts;
//     //Ask for the last 5 Carts created
//     if (queryNew) {
//       findedCarts = await Cart.find().sort({ createdAt: -1 }).limit(5);
//     }
//     //Ask if queryCategory is in the categories array of the model
//     else if (queryCategory) {
//       findedCarts = await Cart.find({
//         categories: {
//           $in: [queryCategory],
//         },
//       });
//     } else {
//       findedCarts = await Cart.find();
//     }
//     res.status(200).send(findedCarts);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });


module.exports = cartRouter;
