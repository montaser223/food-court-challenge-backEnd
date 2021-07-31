const express = require("express");
const config = require("./config");
const app = express();
const mongoose = require("mongoose");
const configs = require("./config");

// get the enviornment configs
const ENV = process.env.NODE_ENV || "dev";
const { DB_URI, PORT } = configs[ENV];

// connect to data base
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) return console.log(err.message);
      console.log("Server started on port: " + PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
