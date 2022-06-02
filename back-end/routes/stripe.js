const express = require("express");
const router = express.Router();
require("dotenv").config();
const {  payFinancial ,verify} = require("../controllers/stripe");

router.post("/payFinancial",  payFinancial);

module.exports = router;