const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('User 관련 API 제작예정');
});