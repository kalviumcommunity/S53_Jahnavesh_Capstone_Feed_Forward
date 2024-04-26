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

router.get("/receiver",async(req,res)=>{
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
      from: 'your@email.com',
      to: donation.Donor_Email,
      subject: 'Your Donation Needs Confirmation',
      html: `
        <p>Dear ${donation.Donor_Name},</p>
        <p>Your donation has been received and is pending confirmation by ${userName}.</p>
        <p>Please confirm your donation:</p>
        <p>
          <a href="http://yourapp.com/accept/${donationId}" style="margin-right: 10px;">Accept</a>
          <a href="http://yourapp.com/deny/${donationId}">Deny</a>
        </p>
        <p>Sincerely,<br/>The Donation Team</p>
      `
    };

    await sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent to donor successfully" });
  } catch (error) {
    console.error("Error sending email to donor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/accept/:donationId", async (req, res) => {
  const { donationId } = req.params;

  try {
    await donateSchema.findByIdAndUpdate(donationId, { status: "Accepted" });
    
    const donation = await donateSchema.findById(donationId);
    const donorEmail = donation.Donor_Email;
    const donorName = donation.Donor_Name;

    const mailOptions = {
      from: 'your@email.com',
      to: donorEmail,
      subject: 'Your Donation Has Been Accepted',
      html: `
        <p>Dear ${donorName},</p>
        <p>We are pleased to inform you that your donation has been accepted.</p>
        <p>Thank you for your generosity!</p>
        <p>Sincerely,<br/>The Donation Team</p>
      `
    };

    await sendMail(mailOptions);

    res.status(200).json({ message: "Donation accepted successfully" });
  } catch (error) {
    console.error("Error accepting donation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/deny/:donationId", async (req, res) => {
  const { donationId } = req.params;

  try {
    await donateSchema.findByIdAndUpdate(donationId, { status: "Denied" });
    
    const donation = await donateSchema.findById(donationId);
    const donorEmail = donation.Donor_Email;
    const donorName = donation.Donor_Name;

    const mailOptions = {
      from: 'your@email.com',
      to: donorEmail,
      subject: 'Your Donation Has Been Rejected',
      html: `
        <p>Dear ${donorName},</p>
        <p>We regret to inform you that your donation has been rejected.</p>
        <p>We appreciate your willingness to contribute.</p>
        <p>Sincerely,<br/>The Donation Team</p>
      `
    };

    await sendMail(mailOptions);

    res.status(200).json({ message: "Donation denied successfully" });
  } catch (error) {
    console.error("Error denying donation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;