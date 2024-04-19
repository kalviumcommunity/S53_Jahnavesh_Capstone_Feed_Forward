const express = require("express");
const router = express.Router();
const { donateSchema, receiveSchema } = require("./Schema");
const sendMail = require("./sendMail")
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


router.post("/receiverDetails",async (req,res)=>{
  const data = req.body;
  const receiver = new receiveSchema(data);
  console.log(data);
  try {
    await receiver.save()
    console.log(data);
    res.send({message : true , receiver : receiver})
  } catch(error){
    console.log(error);
    res.status(500).json({error : error.message});
  }
});

router.post("/receiveDonation/:donationId", async (req, res) => {
  const { donationId } = req.params;
  const { userEmail, userName } = req.body;

  try {
    const donation = await donateSchema.findById(donationId);
    if (!donation) {
      return res.status(404).json({ error: "Donation not found" });
    }
    await sendMail(donation.Donor_Email, userName);
    return res.status(200).json({ message: "Email sent to donor successfully" });
  } catch (error) {
    console.error("Error receiving donation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
