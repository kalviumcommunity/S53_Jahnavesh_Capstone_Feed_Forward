const mongoose = require("mongoose")
const env = require("dotenv")
const connectDB = async()=>{
  try {
    await mongoose.connect("mongodb+srv://jahnavesh:jahnavesh@cluster0.jetw1wp.mongodb.net/Capstone")
    console.log("Database Connected!!");
  }catch(err){
    console.log(err);
  }
}

module.exports = connectDB