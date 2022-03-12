const router = require('express').Router();
const User = require('../models/UserModel');

router('/login', (req, res) => {
    res.send('test');
})

module.exports = router;