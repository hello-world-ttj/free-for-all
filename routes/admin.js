const express = require('express');
const admin_route = express.Router()
const admin_signup_controller = require("../controllers/admin/auth/signup")
const admin_login_controller = require("../controllers/admin/auth/login")
admin_route.post("/signup", admin_signup_controller)
admin_route.post("/login", admin_login_controller)

module.exports = admin_route