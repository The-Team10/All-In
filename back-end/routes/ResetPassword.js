const express = require("express");
const router = express.Router();
require("dotenv").config();

const{ ResetPassword,verifying,updatepassword}= require("../controllers/ResetPassword")

router.post("/update/",updatepassword);
router.post("/reset",ResetPassword);
router.post("/verify",verifying);



module.exports = router;