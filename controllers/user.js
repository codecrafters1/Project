const User = require("../models/user.js");

module.exports.singupForm = (req,res)=>{
    res.render("users/singup.ejs");
}

module.exports.singupUser = async(req,res)=>{
 try{
       let {username,email,password} = req.body;
const newUser = new User({email,username});
const registeredUser = await User.register(newUser,password);
req.login(registeredUser,(err)=>{
    if(err){
        return next(err);
    }
req.flash("success","User Registared Successfully!");
res.redirect("/listings");
});

 } catch (e){
    req.flash("error",e.message);
    res.redirect("/singup");
 }
}

module.exports.loginForm = (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.loginUser = async(req,res)=>{
req.flash("success"," welcome back to wanderlust!");
let redirectUrl = res.locals.redirectUrl || "/listings";
console.log(redirectUrl);
res.redirect(`${redirectUrl}`);
};

module.exports.logoutUser = (req,res)=>{
    req.logout ((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are logout successfully");
        res.redirect("/listings");
    });
};