const express = require("express");
const app = express();
const mongoose = require("mongoose");
const configs = require("./config");
const cors = require("cors");

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

//  add middlewares
app.use(express.json());
app.use(cors());

// add routes
app.use("/stores", require("./routes/stores"));
