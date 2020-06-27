const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    exercises: {
        name: {
            type: String,
            trim: true,
            required: "Name of Exercise is required"
        },
        type: {
            type: String,
            trim: true,
            required: true
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
module,exports = Workout;