const router = require('express').Router();
const User = require('../models/UserModel');
const loginValidate = require('../validation/loginValidation');
const jwt = require('jsonwebtoken');

const secret = 'ndaisndiasnduinas9j32984u910sandjiasn';

router.post('/login', async (req, res) => {
    //Validate body
    const error = loginValidate(req.body);
    if(error) return res.status(400).send(error);

    //Check if email exist
    const userToLogin = await User.findOne({email : req.body.email});
    if(!userToLogin) return res.status(400).send('Email does not exist!');

    //Check if password match
    // const isValidPassword = await bcrypt.compare(req.body.password, userToLogin.password);

    // if(!isValidPassword) return res.status(400).send('Invalid email or password')

    const token = jwt.sign({_id: userToLogin._id}, secret);
    res.header('token', token).send(token);
})

module.exports = router;