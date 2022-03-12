const router = require('express').Router();
const User = require('../models/UserModel');
const loginValidate = require('../validation/loginValidation');

router.get('/login', (req, res) => {
    res.json('test');
})

module.exports = router;