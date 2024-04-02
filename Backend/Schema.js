const mongoose = require("mongoose")
const Schema1 = new mongoose.Schema({
  Feedable_people : {
    type : Number,
    require : true
  } ,
  Location : {
    type : String,
    require : true
  },
  Contact : {
    type : Number,
    require : true
  },
  Food_details : {
    type : String,
    require : true
  },
  myFile : {
    type : String,
    require : true 
  },
  Donor_Name : {
    type : String,
    require : true
  },
  Donor_Email : {
    type : String ,
    require : true
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