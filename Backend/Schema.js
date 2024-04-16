const mongoose = require("mongoose");

const Schema1 = new mongoose.Schema({
  Feedable_people: {
    type: Number,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  Contact: {
    type: Number,
    required: true
  },
  Food_details: {
    type: String,
    required: true
  },
  myFile: {
    type: String,
    required: true
  },
  Donor_Name: {
    type: String,
    required: true
  },
  Donor_Email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Schema2 = new mongoose.Schema({
  Contact: {
    type: Number,
    required: true
  },
  receiverPhoto: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const receiveSchema = mongoose.model("receive", Schema2);
const donateSchema = mongoose.model("donate", Schema1);
const HistoricalDonation = mongoose.model("historicalDonation", Schema1);

setInterval(async () => {
  const expiredDonations = await donateSchema.find({ created_at: { $lt: new Date(Date.now() - 10800 * 1000) } });
  if (expiredDonations.length > 0) {
    await HistoricalDonation.insertMany(expiredDonations);
    await donateSchema.deleteMany({ _id: { $in: expiredDonations.map(d => d._id) } });
  }
}, 3600000);

module.exports = { donateSchema, receiveSchema };
