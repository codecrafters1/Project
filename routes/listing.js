const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const controllersListing = require("../controllers/listing.js")
const {isLoggedIn, isOwner,listingValidate} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudconfig.js")
const upload = multer({ storage});



// NEW ROUTE
router.get("/new",isLoggedIn,controllersListing.renderCreateForm);

//SHOW ROUTE    


//INDEX ROUTE   
router
.route("/")
.get(wrapAsync(controllersListing.index))
.post(isLoggedIn,upload.single("listing[image]"),listingValidate,wrapAsync(controllersListing.createListing));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(controllersListing.editListingForm));


router.route("/:id")
.get( wrapAsync(controllersListing.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),listingValidate,wrapAsync(controllersListing.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(controllersListing.destroyListing));

module.exports = router; 