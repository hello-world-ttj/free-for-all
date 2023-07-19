const Joi = require('joi');

exports.admin_login_schema_validation = Joi.object({
    admin_name: Joi.string().required(),
    admin_password: Joi.string().required()
})

exports.admin_signup_schema_validation = Joi.object({
    admin_first_name: Joi.string().required(),
    admin_last_name: Joi.string().required(),
    admin_name: Joi.string().required(),
    admin_password: Joi.string().required(),
})

exports.user_login_schema_validation = Joi.object({
    user_name: Joi.string().required(),
    user_password: Joi.string().required()
})

exports.registartion_schema_validation = Joi.object({
    user_first_name: Joi.string().required(),
    user_last_name: Joi.string().required(),
    user_name: Joi.string().required(),
    user_password: Joi.string().required(),
    user_phone_number: Joi.number().min(10).required(),
    user_email: Joi.string().required(),
    user_dob: Joi.date().required(),
})

exports.edit_user_schema_validation = Joi.object({
    user_first_name: Joi.string(),
    user_last_name: Joi.string(),
    user_name: Joi.string(),
    user_phone_number: Joi.number().min(10),
    user_email: Joi.string(),
    user_image: Joi.string(),
    user_dob: Joi.date(),
})