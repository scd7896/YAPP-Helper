const express = require('express');
const router = express.Router();
const controller = require('../controller/email')
router.get('/test', controller.socket)

module.exports = router