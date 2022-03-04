const express = require("express");
const cartRouter = express.Router();

cartRouter.get("/", function (req, res) {
  res.send("CART");
});

module.exports = cartRouter;
