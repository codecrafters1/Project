const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,reviewValidate, isAuthor} = require("../middleware.js");
const controllersReview = require("../controllers/review.js")



//POST
// CREATE REVIEW ROUTE
router.post("/",isLoggedIn,reviewValidate,wrapAsync(controllersReview.createReview));

//DELETE REVIEW ROUTE
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(controllersReview.destroyReview));

module.exports = router;