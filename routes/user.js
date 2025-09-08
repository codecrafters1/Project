const express = require("express");
const router = express.Router({mergeParams:true});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveredirectUrl } = require("../middleware.js");
const controllersUser = require("../controllers/user.js");


router
.route("/singup")
.get(controllersUser.singupForm)
.post( wrapAsync(controllersUser.singupUser));

router
.route("/login")
.get(controllersUser.loginForm)
.post(saveredirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}), controllersUser.loginUser);

router.get("/logout",controllersUser.logoutUser);

module.exports = router;