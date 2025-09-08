const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
const {reviewSchema} = require("./schema.js");



module.exports.isLoggedIn = (req,res,next) =>{
        if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","for adding listing you must be login first!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveredirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;

    }
      next();
};


module.exports.isOwner = async(req,res,next) => {
    let { id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
    req.flash("error","you dont have permission to edit");
    return res.redirect(`/listings/${id}`);
    }
next();
}


module.exports.listingValidate = (req,res,next)=>{
     const {error} = listingSchema.validate(req.body);
  if(error){ 
  let errMsg = error.details.map((el)=> el.message).join(",");
    throw new ExpressError(400,errMsg);
  }
  else 
    next();
};

module.exports.reviewValidate = (req,res,next)=>{
     const {error} = reviewSchema.validate(req.body);
  if(error){ 
  let errMsg = error.details.map((el)=> el.message).join(",");
    throw new ExpressError(400,errMsg);
  }
  else 
    next();
};

module.exports.isAuthor = async(req,res,next) => {
    let {reviewId,id} = req.params;
    let review = await Review.findById(reviewId).populate("author");
    if(!review.author._id.equals(res.locals.currUser._id)){
    req.flash("error","you dont have permission to delete");
    return res.redirect(`/listings/${id}`);
    }
next();
}