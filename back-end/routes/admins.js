const express = require("express");
const router = express.Router();
require("dotenv").config();
// Require controller modules.
const{admins}= require("../controllers/admins.controller");

//Routers//
router.post("/admins", admins);

module.exports = router;




