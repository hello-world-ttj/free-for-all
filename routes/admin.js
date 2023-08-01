const express = require('express');
const admin_route = express.Router()
const admin_signup_controller = require("../controllers/admin/auth/signup")
const admin_login_controller = require("../controllers/admin/auth/login")
const read_users_controller = require("../controllers/admin/users/read_user")
const admin_validate = require("../middleware/admin_validator")
admin_route.post("/signup", admin_signup_controller)
admin_route.post("/login", admin_login_controller)
admin_route.get("/users", admin_validate, read_users_controller)

module.exports = admin_route