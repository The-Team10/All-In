const express = require("express");
const router = express.Router();
const staffMember = require ('../controllers/staffMember.controller');

 router.post('/',staffMember.insertStaffMember)


module.exports = router;