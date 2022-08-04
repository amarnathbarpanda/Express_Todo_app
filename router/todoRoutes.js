const express = require('express');
const { todo } = require('../controller/todoControllers');

const router = express.Router();

router.get('/', todo);

module.exports = router;