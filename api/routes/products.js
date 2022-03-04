const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/", function (req, res) {
  res.send("PRODUCTS");
});

module.exports = productsRouter;
