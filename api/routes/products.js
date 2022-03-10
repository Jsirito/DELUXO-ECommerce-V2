const express = require("express");
const Product = require("../models/Products");
const productsRouter = express.Router();
const { verifyTokenAndAdmin } = require("./verifyToken");

//CREATE PRODUCT
productsRouter.post("/newProduct", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE PRODUCT
productsRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  //Updating Product
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      //Id to update
      req.params.id,
      //Info to update Product
      {
        $set: req.body,
      },
      //Return updated Product
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE PRODUCT
productsRouter.delete(
  "/deleteProductById/:id",
  verifyTokenAndAdmin,
  async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).send("Product deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//GET PRODUCT BY ID
productsRouter.get("/findProductById/:id", async (req, res) => {
  try {
    const findedProduct = await Product.findById(req.params.id);
    res.status(200).send(findedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET ALL PRODUCTS
productsRouter.get("/findAllProducts", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    let findedProducts;
    //Ask for the last 5 products created
    if (queryNew) {
      findedProducts = await Product.find().sort({ createdAt: -1 }).limit(5);
    }
    //Ask if queryCategory is in the categories array of the model
    else if (queryCategory) {
      findedProducts = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      findedProducts = await Product.find();
    }
    res.status(200).send(findedProducts);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = productsRouter;
