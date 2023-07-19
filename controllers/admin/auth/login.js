const jwt = require("jsonwebtoken");
const {
  admin_login_schema_validation,
} = require("../../../helpers/validation/validation");
const admin_model = require("../../../models/admin.model");
const response = require("../../../helpers/responses/response");
let md5 = require("md5");
const admin_login_controller = async (req, res) => {
  let admin_login_validator = admin_login_schema_validation.validate(req.body, {
    abortEarly: true,
  });
  if (admin_login_validator.error)
    return response(res, 400, "Invalid fields", admin_login_validator.error);
  let admin_name = req.body.admin_name;
  let admin_password = md5(req.body.admin_password);
  try {
    let find_admin = await admin_model.findOne({
      admin_name: admin_name,
      admin_password: admin_password,
    });
    if (find_admin) {
      let payload = {
        id: find_admin._id,
      };
      jwt.sign(payload, process.env.JWT_SECRET, async (error, token) => {
        if (error) {
          return response(res, 500, "Something went wrong while token generation", null);
        } else {
          return response(res, 200, "Login success", {token: token});
        }
      })
    } else {
      return response(res, 403, "Invalid Credentials", null);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = admin_login_controller;
