const router = require('express').Router();
const User = require('../models/UserModel');

router.get('/login', (req, res) => {
    res.json('test');
})

module.exports = router;