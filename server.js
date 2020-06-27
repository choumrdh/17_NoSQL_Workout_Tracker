const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const workoutController = require("./controllers/workout-controller")
const PORT = process.env.PORT || 8080;

// const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(workoutController);

mongoose.connect("mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });