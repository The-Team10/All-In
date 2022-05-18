const express = require("express");
const router = express.Router();
require("dotenv").config();
// Require controller modules.
const{signupHelp,z

}= require("../controllers/helpseekers")
// router.get("/gethelp", getReviews);
//Routers//
router.post("/signup",signupHelp);


module.exports = router;
