const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");

// html routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// api routes
router.get("/api/workouts", async (req, res) => {
    try {
        let data = await db.Workout.find({})

        //Function to take data array from db and perform summation of exercise lengths for each day.
        const getDuration = function(data){

            let newData = [];
            //set new data array

            //moves through each day of the array
            data.forEach(function(day){
                //initialize sum of duration (on each day)
                let addedDuration = 0;

                //move through each exercise performed during that day, and add the duration to the sum of durations.
                day.exercises.forEach(function(exercise) {
                    addedDuration = addedDuration + exercise.duration;
                    return addedDuration;
                });
                //reconstruct day object including a totalDuration key value pairing.
                // day.totalDuration = addedDuration;
                const newDay = {
                    "day": day.day,
                    "_id": day._id,
                    "exercises": day.exercises,
                    "totalDuration": addedDuration
                };
                
                //adds each day to the array of days (effectively building a new data array)
                return newData.push(newDay);
            })

            //return the completely restructured data object with totalDuration added to each day.
            return newData;
        };

        //call function and overwrite old data array
        data = getDuration(data);
        res.json(data);

    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

router.post("/api/workouts", async (req, res) => {
    try {
        const data = await db.Workout.create(req.body);
        res.send(data);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        const data = await db.Workout.findOneAndUpdate({_id:req.params.id }, { $push: { exercises: req.body } });
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        const data = await db.Workout.find({});
        res.json(data)
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});


module.exports = router