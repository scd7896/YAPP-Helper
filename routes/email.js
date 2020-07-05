const express = require('express');
const router = express.Router();
const controller = require('../controller/email');

router.post('/send', controller.send);

module.exports = router;
