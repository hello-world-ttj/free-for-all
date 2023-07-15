const mongoose = require("mongoose");
const admin_schema = new mongoose.Schema({
  admin_first_name: { type: String },
  admin_last_name: { type: String },
  admin_name: { type: String },
  admin_password: { type: String },
});
let admin_model = mongoose.model("admin", admin_schema);
module.exports = admin_model;
