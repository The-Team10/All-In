const express = require("express");
const router = express.Router();
require("dotenv").config();
// Require controller modules.
const{signupAdmins ,loginAdmins}= require("../controllers/admins.controller")

//Routers//
router.post("/signup",signupAdmins);
router.post("/login",loginAdmins);

module.exports = router;

