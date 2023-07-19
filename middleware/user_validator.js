const jwt = require("jsonwebtoken");
const user_model = require("../models/user.model");
const response = require("../helpers/responses/response");
const user_auth = async (req, res, next) => {
  const auth_header = req.headers["authorization"];
  const jwt_token = auth_header && auth_header.split(" ")[1];
  if (jwt_token === null) {
    return response(res, 403, "Missing JWT token", null);
  } else {
    try {
      jwt.verify(jwt_token, process.env.JWT_SECRET, async (error, auth) => {
        if (error) return response(res, 403, "Inavalid JWT token", null);
        let user_check = await user_model.findOne({ _id: auth.id });
        if (user_check) {
          res.locals.userid = user_check.id;
          return next();
        }
        return response_maker(res, 403, "User token id is not found", null);
      });
    } catch (error) {
      return response(res, 500, "Something Went Wrong", null);
    }
  }
};

module.exports = user_auth;
