const router = require('express').Router();
const User = require('../models/UserModel');
const loginValidate = require('../validation/loginValidation');
const registerValidate = require('../validation/registerValidation');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'ndaisndiasnduinas9j32984u910sandjiasn';

router.post('/login', async (req, res) => {
    //Validate body
    const error = loginValidate(req.body);
    if(error) return res.status(400).json(error);

    // Check if email exist
    const userToLogin = await User.findOne({email : req.body.email});
    if(!userToLogin) return res.status(400).json('Email does not exist!');

    // Check if password match
    const isValidPassword = await bcrypt.compare(req.body.password, userToLogin.password);

    if(!isValidPassword) return res.status(400).send('Invalid email or password')

    const token = jwt.sign({_id: userToLogin._id}, secret);
    res.json(token);
    // res.header('token', token).json(token);
})

router.post('/register', async (req, res) => {
    //Validate body
    const error = registerValidate(req.body);
    if(error) return res.status(400).send(error);

    //Check if email exist
    const checkIfEmailExist = User.findOne({email : req.body.email});
    if(!checkIfEmailExist) return res.status(400).send('User with this email already exists!');

    //Hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create user
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    })
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;