const express = require("express");
const router = express.Router();
require("dotenv").config();

const{ helpseekers}= require("../controllers/helpseekers")

router.post("/needs",helpseekers);


module.exports = router;