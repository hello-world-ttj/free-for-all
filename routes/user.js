const express = require("express");
const user_route = express.Router();
const user_registration_controller = require("../controllers/user/auth/registration");
const user_login_controller = require("../controllers/user/auth/login");
const edit_user_controller = require("../controllers/user/profile/edit");
const user_validate = require("../middleware/user_validator");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// Configure multer to use Cloudinary as storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "testing",
  },
});
const upload = multer({ storage: storage });
user_route.post("/register", user_registration_controller);
user_route.post("/login", user_login_controller);
user_route.patch(
  "/edit",
  user_validate,
  upload.single("user_image"),
  edit_user_controller
);

module.exports = user_route;
