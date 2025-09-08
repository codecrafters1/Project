const Listing  = require("../models/listing.js");
const { geocodeLocation } = require("../utils/map.js");

module.exports.index = async (req,res)=>{
   const allListing = await Listing.find({});
   res.render("./listings/index.ejs",{allListing});
};

module.exports.createListing = async (req,res)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    const geometry = await geocodeLocation(newListing.location);
    newListing.geometry = geometry;
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
};

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","the listing you requested for does not exist");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs",{listing});
};

// render edit form for listing
module.exports.editListingForm = async (req,res)=>{
   let {id} = req.params;
    const listing = await Listing.findById(id);
     if(!listing){
        req.flash("error","the listing you requested for edit does not exist");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl =  originalImageUrl.replace("/upload","/upload/w_250");
 res.render("./listings/edit.ejs",{listing,originalImageUrl});
};

// updating listing info in DB
module.exports.updateListing = async (req,res)=>{
     let {id} = req.params;
 let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
 if(typeof req.file !== "undefined"){
 let url = req.file.path;
 let filename = req.file.filename;
 listing.image = {url,filename};  
 await listing.save();
 }
 req.flash("success","Listing Updated!");
res.redirect(`/listings/${id}`);
};


// deleting a listing from DB
module.exports.destroyListing = async (req,res)=>{
    let {id} = req.params;
await Listing.findByIdAndDelete(id);
   req.flash("success"," Listing Deleted");
    res.redirect("/listings");
};

module.exports.renderCreateForm = (req,res)=>{
    res.render("./listings/new.ejs");
};