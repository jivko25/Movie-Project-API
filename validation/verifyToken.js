const jwt = require('jsonwebtoken');

//Secret (need to be hidden)
const secret = 'ndaisndiasnduinas9j32984u910sandjiasn';

const verify = (req, res, next) => {
    const token = req.header('token');

    if(!token) return res.status(401).send('Access Denied!');

    try {
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
}

module.exports = verify;