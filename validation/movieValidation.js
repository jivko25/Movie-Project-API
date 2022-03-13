const Joi = require('@hapi/joi');

const schema = Joi.object({
    ownerId : Joi.string().required(),
    title : Joi.string().required(),
    plot : Joi.string().min(10).max(1024).required(),
    genre : Joi.string().required(),
    actors : Joi.array().required(),
    releaseDate : Joi.date().required(),
    country : Joi.string().required(),
    imageUrl : Joi.string().min(10).required(),
    trailerUrl : Joi.string().min(10).required(),
    budget : Joi.number().required(),
    rate : Joi.number().default(0),
    votes : Joi.number().default(0),
    oscar : Joi.boolean().default(false),
    director : Joi.string().required(),
    screenwriter : Joi.string().required(),
})



const createValidation = data => {
    const {error} = schema.validate(data);
    if(error) {
        return error.details[0].message;
    }
    return null;
};

module.exports = createValidation;