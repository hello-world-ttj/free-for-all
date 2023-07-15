const express = require('express');
const admin_route = express.Router()
const admin_signup_controller = require("../controllers/admin/auth/signup")
admin_route.post("/signup", admin_signup_controller)

module.exports = admin_route