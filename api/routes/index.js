const express = require("express");
const router = express.Router();
const usersRoute = require("./users");
const productsRouter = require("./products");
const cartRouter = require("./cart");
const ordersRouter = require("./orders");
const authRouter = require("./auth");

router.use("/users", usersRoute);
router.use("/products", productsRouter);
router.use("/cart", cartRouter);
router.use("/orders", ordersRouter);
router.use("/auth", authRouter);

module.exports = router;
