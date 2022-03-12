const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    ownerId : {
        type : String,
        require : true
    },
    title : {
        type: String,
        require : true
    },
    plot : {
        type : String,
        require : true,
        min : 10,
        max : 1024
    },
    genre : {
        type : String,
        require : true
    },
    actors : {
        type : Array,
        require : true
    },
    releaseDate : {
        type : Date,
        require : true
    },
    country : {
        type : String,
        require : true,
    },
    imageUrl : {
        type : String,
        require : true,
        min : 10
    },
    trailerUrl: {
        type : String,
        require : true,
        min : 10
    },
    budget : {
        type : Number,
        require : true
    },
    rate : {
        type : Number,
        require : true,
        default : 0
    },
    votes : {
        type : Number,
        require : true,
        default : 0
    },
    oscar : {
        type : Boolean,
        required : true,
        default : false
    },
    director : {
        type : String,
        required : true
    },
    screenwriter : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Movie', movieSchema)