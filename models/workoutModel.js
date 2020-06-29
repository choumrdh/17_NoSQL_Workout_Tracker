const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    exercises: {
        date: {
            type: Date,
            default: Date.now()
        },
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: "Name of Exercise is required"
        },
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number,
        distance: {
            type: Number,
            required: "Distance traveled"
        }
    }
})
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;