const express = require("express");
const router = express.Router();
const { donateSchema } = require("./Schema");
router.use(express.json());

router.post("/donateForm", async (req, res) => {
  const data = req.body;
  const donate = new donateSchema(data);
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
