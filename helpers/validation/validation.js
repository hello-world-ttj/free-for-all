const Joi = require('joi');

exports.login_schema_validation = Joi.object({
    user_name: Joi.string().required(),
    user_password: Joi.string().required()
})

exports.registartion_schema_validation = Joi.object({
    user_first_name: Joi.string().required(),
    user_last_name: Joi.string().required(),
    user_name: Joi.string().required(),
    user_phone_number: Joi.number().min(10).required(),
    user_email: Joi.string().required(),
    user_image: Joi.string().required(),
    user_dob: Joi.date().required(),
})