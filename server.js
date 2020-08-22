const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const workoutController = require("./controllers/workout-controller")
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(workoutController);
// mongodb+srv://dbUser:P@ssword@cluster0.q6l5y.mongodb.net/heroku_d9306550?retryWrites=true&w=majority
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workoutDB";
mongoose.connect( MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});