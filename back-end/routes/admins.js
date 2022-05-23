const express = require("express");
const router = express.Router();
// Require controller modules.
const adminsController = require('../controllers/admins.controller')
require("dotenv").config();


const { signupAdmins, loginAdmins } = require('../controllers/admins.controller')
// POST request
router.post('/',adminsController.insertAdmin)
router.post('/signup', signupAdmins);
router.post('/login', loginAdmins);

module.exports = router;
