const express = require("express");
const router = express.Router();
const { donateSchema, receiveSchema } = require("./Schema");
const sendMail = require("./sendMail");
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
  console.log(data);
  try {
    await donate.save();
    console.log(data);
    res.send({ message: true, donate: donate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/receiveDetails", async (req, res) => {
  const data = req.body;
  const receiver = new receiveSchema(data);
  console.log(data);
  try {
    await receiver.save()
    console.log(data);
    res.send({ message: true, receiver: receiver })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/receiver", async (req, res) => {
  try {
    const receiverDet = await receiveSchema.find();
    console.log(receiverDet);
    res.json(receiverDet)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

})

router.post("/receiveDonation/:donationId", async (req, res) => {
  const { donationId } = req.params;
  const { userEmail, userName } = req.body;

  try {
    const donation = await donateSchema.findById(donationId);
    if (!donation) {
      return res.status(404).json({ error: "Donation not found" });
    }

    const mailOptions = {
      from: 'jahnavreddy12@gmail.com',
      to: donation.Donor_Email,
      subject: 'Donation Accepted',
      html: `
        <p>Dear ${donation.Donor_Name},</p>
        <p>A person is trying to receive your donation.</p>
        <p>Sincerely,<br/>The Donation Team</p>
      `
    };

    await sendMail(mailOptions);

    return res.status(200).json({ message: "Request sent to donor successfully" });
  } catch (error) {
    console.error("Error sending request to donor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/processDonationRequest/:donationId/accept", async (req, res) => {
  const { donationId } = req.params;

  try {
    const donationRequest = await receiveSchema.findById(donationId);
    if (!donationRequest) {
      return res.status(404).json({ error: "Donation request not found" });
    }

    await receiveSchema.findByIdAndUpdate(donationId, { status: "Accepted" });


    return res.status(200).json({ message: "Donation request accepted successfully" });
  } catch (error) {
    console.error("Error accepting donation request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/receivedDonations", async (req, res) => {
  try {
    const receivedDonations = await receiveSchema.find({ status: "Pending" });
    res.json(receivedDonations);
  } catch (error) {
    console.error("Error fetching received donations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
