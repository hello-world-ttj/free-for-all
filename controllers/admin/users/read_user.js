const response = require("../../../helpers/responses/response");
const user_model = require("../../../models/user.model");
const read_user = async (req, res) => {
  try {
    const users_data = await user_model.find({});
    if (users_data) return response(res, 200, "Users data", users_data);
    return response(res, 200, "No user found", null);
  } catch (error) {
    return response(res, 500, "Something went wrong", null);
  }
};

module.exports = read_user;
