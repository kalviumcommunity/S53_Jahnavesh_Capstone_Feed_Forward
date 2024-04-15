const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const router = require("./routes");
const bodyParser = require("body-parser");
const cron = require('node-cron');
const { donateSchema } = require('./Schema');
const { DateTime } = require("luxon");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use("/", router);

connectDB();

// const Donate = mongoose.model("Donate", donateSchema);

// const TTL_SECONDS = 3.5 * 60 * 60;

// Donate.createIndex({ createdAt: 1 }, { expireAfterSeconds: TTL_SECONDS });

// cron.schedule('* * * * *', async () => {
//   const expiryTime = DateTime.now().minus({ hours: 3, minutes: 30 });

//   try {
//     const expiredDonations = await Donate.find({ createdAt: { $lt: expiryTime } });
//     for (const donation of expiredDonations) {
//       await donation.remove();
//       console.log(`Expired donation removed: ${donation._id}`);
//     }
//   } catch (error) {
//     console.error('Error removing expired donations:', error);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my capstone project!!");
});
