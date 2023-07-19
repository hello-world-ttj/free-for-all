const {
  edit_user_schema_validation,
} = require("../../../helpers/validation/validation");
const user_model = require("../../../models/user.model");
const response = require("../../../helpers/responses/response");
const edit_user_controller = async (req, res) => {
  let edit_user_validator = edit_user_schema_validation.validate(req.body, {
    abortEarly: true,
  });
  if (edit_user_validator.error)
    return response(res, 422, "Invalid fields", edit_user_validator.error);
  try {
    if (req.file) {
      req.body.user_image = req.file.path;
    }
    let update_user = await user_model.findOneAndUpdate(
      { _id: res.locals.userid },
      req.body,
      { new: true }
    );
    if (update_user) {
      return response(res, 200, "User profile updated", null);
    } else {
      return response(res, 403, "Invalid update request", null);
    }
  } catch (error) {
    return response(res, 500, "Something Went Wrong " + error, null);
  }
};

module.exports = edit_user_controller;
