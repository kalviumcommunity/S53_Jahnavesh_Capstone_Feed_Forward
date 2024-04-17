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
  try {
    const expirationThreshold = new Date(Date.now() - 3 * 60 * 60 * 1000);
    const expiredDonations = await donateSchema.find({ created_at: { $lt: expirationThreshold } });

    if (expiredDonations.length > 0) {
      console.log(`Moving ${expiredDonations.length} expired donations to HistoricalDonation...`);
      await HistoricalDonation.insertMany(expiredDonations);
      console.log(`Deleting ${expiredDonations.length} expired donations from donateSchema...`);
      await donateSchema.deleteMany({ _id: { $in: expiredDonations.map(d => d._id) } });
      console.log("Expired donations moved and deleted successfully.");
    } else {
      console.log("No expired donations found.");
    }
  } catch (error) {
    console.error("Error occurred while processing expired donations:", error);
  }
}, 3600000);


module.exports = { donateSchema, receiveSchema };
