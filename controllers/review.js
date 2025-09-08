const Review  = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async(req,res)=>{
  const listing = await Listing.findById(req.params.id);
  const newReviews = new Review(req.body.review);
  newReviews.author = req.user._id;
  listing.reviews.push(newReviews);

  await newReviews.save();
   await listing.save();
      req.flash("success","New Review Created!");
   res.redirect(`/listings/${listing._id}`);
}


module.exports.destroyReview = async(req,res)=>{
 let { id, reviewId } = req.params;

 await Listing.findByIdAndUpdate(id, { $pull : { reviews : reviewId} });
 await Review.findByIdAndDelete(reviewId);
   req.flash("success","Review Deleted");
 res.redirect(`/listings/${id}`);
}