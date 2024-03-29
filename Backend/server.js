const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/", router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my capstone project !!");
});
