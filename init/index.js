const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../.env" });
const initData = require("./data.js");
const Listing = require("../models/listing.js");




main().then((res)=>{
    console.log("connection successful")
}).catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

}

const initDb = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
    ...obj,
     owner:"68ba91adddda2d3229276412",
    }));
    await Listing.insertMany(initData.data);
    console.log("data saved successfully");
};

initDb();
