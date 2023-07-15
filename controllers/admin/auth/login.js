const jwt = require("jsonwebtoken");
const { admin_login_schema_validation } = require("../../../helpers/validation/validation");
const admin_model = require("../../../models/admin.model");
const response = require("../../../helpers/responses/response")
const admin_login_controller = async (req, res) => {
  try {
    let admin_name = req.body.admin_name;
    let admin_password = req.body.admin_password;
    let admin_login_validator = admin_login_jschema.validate(req.body, { abortEarly: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = admin_login_controller;
