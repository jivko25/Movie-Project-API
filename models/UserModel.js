const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type: String,
        require: true,
        min : 10,
        max: 50
    },
    email: {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true,
        min: 6,
        max: 255
    }
})

module.exports = mongoose.model('User', userSchema);