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

const donateCollection = mongoose.connection.collection('donates');

donateCollection.createIndex({ created_at: 1 }, { expireAfterSeconds: 10800 });


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my capstone project!!");
});
