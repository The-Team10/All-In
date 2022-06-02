const express = require("express");
const router = express.Router();
require("dotenv").config();

const{ contact}= require("../controllers/contact")

router.post("/contact",contact);


module.exports = router;