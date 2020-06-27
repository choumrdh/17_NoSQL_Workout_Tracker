const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const path = require("path");

// html rputes
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
router.get("/api/workouts", async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

router.post("/api/workouts", async({body},res)=>{
    try {
        const {_id} = await db.Workout.create(body);
        router.get("/api/workouts", async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

router.get("/api/workouts/:id", async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

router.get("/api/workouts/range", async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});


module.exports = router