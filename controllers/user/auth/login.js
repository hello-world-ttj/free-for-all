const jwt = require("jsonwebtoken");
const {
  user_login_schema_validation,
} = require("../../../helpers/validation/validation");
const user_model = require("../../../models/user.model");
const response = require("../../../helpers/responses/response");
const bcrypt = require("bcrypt");
const user_login_controller = async (req, res) => {
  let user_login_validator = user_login_schema_validation.validate(req.body, {
    abortEarly: true,
  });
  if (user_login_validator.error)
    return response(res, 400, "Invalid fields", user_login_validator.error);
  let user_name = req.body.user_name;
  try {
    let find_user = await user_model.findOne({
      user_name: user_name,
    });
    let validate_user = bcrypt.compare(
      req.body.user_password,
      find_user.user_password
    );
    if (validate_user) {
      let payload = {
        id: find_user._id,
      };
      jwt.sign(payload, process.env.JWT_SECRET, async (error, token) => {
        if (error) {
          return response(
            res,
            500,
            "Something went wrong while token generation",
            null
          );
        } else {
          return response(res, 200, "Login success", { token: token });
        }
      });
    } else {
      return response(res, 403, "Invalid Credentials", null);
    }
  } catch (error) {
    return response(res, 500, "Something Went Wrong", null);
  }
};

module.exports = user_login_controller;
