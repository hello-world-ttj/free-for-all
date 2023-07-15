const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
  user_first_name: { type: String },
  user_last_name: { type: String },
  user_name: { type: String },
  user_phone_number: { type: Number },
  user_email: { type: String },
  user_image: { type: String },
  user_dob: { type: Date },
});
let user_model = mongoose.model("users", user_schema);
module.exports = user_model;