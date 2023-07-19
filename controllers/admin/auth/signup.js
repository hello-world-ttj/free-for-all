const jwt = require("jsonwebtoken");
const {
  admin_signup_schema_validation,
} = require("../../../helpers/validation/validation");
const admin_model = require("../../../models/admin.model");
const response = require("../../../helpers/responses/response");
const bcrypt = require("bcrypt");
const admin_signup_controller = async (req, res) => {
  try {
    let admin_signup_validator = admin_signup_schema_validation.validate(
      req.body,
      { abortEarly: false }
    );
    if (admin_signup_validator.error)
      return response(res, 400, "Invalid fields", admin_signup_validator.error);
    const admin_password_hash = await bcrypt.hash(req.body.admin_password, 13);
    let data = {
      admin_first_name: req.body.admin_first_name,
      admin_last_name: req.body.admin_last_name,
      admin_name: req.body.admin_name,
      admin_password: admin_password_hash,
    };
    let save_admin = await admin_model(data);
    let save_data = await save_admin.save();
    console.log(save_data);
    return response(res, 200, "Admin signup successfully", null);
  } catch (error) {
    return response(res, 500, "Something Went Wrong", null);
  }
};

module.exports = admin_signup_controller;
