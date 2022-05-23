const express = require("express");
const router = express.Router();
// Require controller modules.
const adminsController = require('../controllers/admins.controller')

// POST request
router.post('/',adminsController.insertAdmin)


module.exports = router;
