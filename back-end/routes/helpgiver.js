const express = require("express");
const router = express.Router();
require("dotenv").config();
const {donnationsMaterial,postFinanciel,listNeeds} = require("../controllers/helpgiver")

router.post("/donnationMat",donnationsMaterial);
router.post ("/donnationFin",postFinanciel)
router.get("/listNeeds",listNeeds)

module.exports = router;