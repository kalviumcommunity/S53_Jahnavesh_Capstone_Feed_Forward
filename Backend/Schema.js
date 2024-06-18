const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
  Donor_Name: String,
  Donor_Email: String,
  Feedable_people: Number,
  Location: String,
  Contact: String,
  Food_details: String,
  myFile: String,
}, { timestamps: true });

const receiveSchema = new mongoose.Schema({
  donationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donate' },
  donorEmail: String,
  donorName: String,
  userEmail: String,
  userName: String,
}, { timestamps: true });

module.exports = {
  donateSchema: mongoose.model("Donate", donateSchema),
  receiveSchema: mongoose.model("Receive", receiveSchema),
};
