const express = require("express");
const router = express.Router();
require("dotenv").config();
const { postHealth, getHealth, postEducation ,getEducation,postSocial,getSocial} = require("../controllers/categorie")

router.post("/postHealth", postHealth);
router.get('/getHealth',getHealth);
router.post("/postEducation", postEducation);
router.get('/getEducation',getEducation);
router.post("/postSocial", postSocial);
router.get('/getSocial',getSocial);




module.exports = router;
