const express = require("express");
const router = express.Router();
const { donateSchema } = require("./Schema");
router.use(express.json());

router.get("/receive", async (req, res) => {
  try {
    const food = await donateSchema.find(); 
    console.log("Donations", food);
    res.json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/donateForm", async (req, res) => {
  const data = req.body;
  const donate = new donateSchema(data);
  console.log(data)
  try {
    await donate.save();
    console.log(data);
    res.send({ message: true, donate: donate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
