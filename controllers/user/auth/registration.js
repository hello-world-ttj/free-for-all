const jwt = require("jsonwebtoken");
const {
  registartion_schema_validation,
} = require("../../../helpers/validation/validation");
const user_model = require("../../../models/user.model");
const response = require("../../../helpers/responses/response");
const bcrypt = require("bcrypt");
const user_registration_controller = async (req, res) => {
  try {
    let user_registration_validator = registartion_schema_validation.validate(
      req.body,
      { abortEarly: false }
    );
    if (user_registration_validator.error)
      return response(
        res,
        400,
        "Invalid fields",
        user_registration_validator.error
      );
    const user_password_hash = await bcrypt.hash(req.body.user_password, 13);
    let data = {
      user_first_name: req.body.user_first_name,
      user_last_name: req.body.user_last_name,
      user_name: req.body.user_name,
      user_password: user_password_hash,
      user_phone_number: req.body.user_phone_number,
      user_email: req.body.user_email,
      user_dob: req.body.user_dob,
    };
    let save_user = await user_model(data);
    let save_data = await save_user.save();
    console.log(save_data);
    return response(res, 200, "User registered successfully", null);
  } catch (error) {
    return response(res, 500, "Something Went Wrong", null);
  }
};

module.exports = user_registration_controller;
