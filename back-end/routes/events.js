const express = require("express");
const router = express.Router();
require("dotenv").config();

const{ postEvent, getEvents}= require("../controllers/events")

router.post("/events",postEvent);
router.get('/getEvents',getEvents)


module.exports = router;