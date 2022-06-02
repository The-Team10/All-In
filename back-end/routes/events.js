const express = require("express");
const router = express.Router();
require("dotenv").config();
// Require controller modules.
// const eventsController = require('../controllers/events.controller');
const events = require("../database-mysql/models/events");
//Routers//
// router.get("/selectAll", eventController.selectAll);
// router.get("/selectOne/:id", eventController.selectOne);
// router.post("/addEvent", eventController.addEvent);
// router.put("/modif/:id", eventController.modifEvent);
// router.delete("/delete/:id", eventController.deleteEvent);
// router.get("/selectAllById/:id0", eventController.selectAllById);
router.get("/", (req,res) =>{
    res.json('events')
});

router.post("/",(req,res)=>{
    const post = req.body;
    events.create(event)
} )
module.exports = router;


