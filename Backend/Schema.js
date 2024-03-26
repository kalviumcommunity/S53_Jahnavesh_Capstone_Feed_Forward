const mongoose = require("mongoose")
const Schema1 = new mongoose.Schema({
  Feedable_people : {
    type : Number,
    required : true
  } ,
  Location : {
    type : String,
    required : true
  },
  Contact : {
    type : Number,
    required : true
  },
  Food_details : {
    type : String,
    required : true
  },
  myFile : {
    type : String,
    required : true 
  }

})

const Schema2 = new mongoose.Schema({
  Contact : {
    type : Number ,
    require : true
  }
})


const receiveSchema = mongoose.model("receive",Schema2)
const donateSchema = mongoose.model("donate",Schema1)

module.exports = {donateSchema , receiveSchema}