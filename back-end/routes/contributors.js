const express = require("express");
const router = express.Router();
require("dotenv").config();
// Require controller modules.
const{signupHelp ,loginHelp}= require("../controllers/contributors")
// router.get("/gethelp", getReviews);
//Routers//
router.post("/signup",signupHelp);
router.post("/login",loginHelp);

module.exports = router;
