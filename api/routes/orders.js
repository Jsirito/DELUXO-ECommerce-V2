const express = require("express");
const ordersRouter = express.Router();

ordersRouter.get("/", function (req, res) {
  res.send("ORDERS");
});

module.exports = ordersRouter;
