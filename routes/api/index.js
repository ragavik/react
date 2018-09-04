const express = require('express');
const router = express.Router();
const diaryRouter = require('./diary');

router.use('/diary', diaryRouter);

module.exports = router;