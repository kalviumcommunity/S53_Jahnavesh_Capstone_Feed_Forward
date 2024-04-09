const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const router = require("./routes");
const bodyParser = require("body-parser");
const cron = require('node-cron');
const Donations = require('./Schema/donateSchema');
const { DateTime } = require("luxon");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use("/", router);

connectDB();

cron.schedule('* * * * *', async () => {
  const now = DateTime.now().toUTC();
  
  const expiryTime = now.minus({ hours: 3, minutes: 30 });
  
  const expiredDonations = await Donations.find({ createdAt: { $lt: expiryTime } });
  
  try {
    for (const donation of expiredDonations) {
      await donation.remove();
      console.log(`Expired donation removed: ${donation._id}`);
    }
  } catch (error) {
    console.error('Error removing expired donations:', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my capstone project !!");
});
