const Joi = require('@hapi/joi');

const schema = Joi.object({
    email : Joi.string().required().email(),
    password : Joi.string().min(6).required()
})


const loginValidate = data => {
    const {error} = schema.validate(data);
    if(error) {
        return error.details[0].message;
    }
    return null;
};

module.exports = loginValidate;