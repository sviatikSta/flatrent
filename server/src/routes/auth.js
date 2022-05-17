const express = require("express");
const router = express.Router();
const authConfig = require("../middlewares/auth");
const { auth } = require("../controllers");

router.post("/register", auth.registerNewUser);
router.post("/login", auth.loginUser);
router.get("/me", authConfig, auth.getUserDetails);

module.exports = router;