const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

// const DB_URL = "mongodb://0.0.0.0:27017/admin";
const DB_URL = "mmongodb+srv://rufus090400:rufus090400@cluster0.pzrkyma.mongodb.net/?retryWrites=true&w=majorityongodb://localhost:27017/admin";

//connect to mongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });