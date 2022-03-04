const express = require("express");
const app = express();
const volleyball = require("volleyball");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");

app.use(express.json())

//env
dotenv.config();

//Loger
app.use(volleyball);

//Rutes
app.use("/api", routes);

//Conect to mongoAtlas
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  //Server listen
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on: http://localhost:${process.env.PORT || 5000}`
      );
    });
  })
  .catch((err) => console.log(err));
