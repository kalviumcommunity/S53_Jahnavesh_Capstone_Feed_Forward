const nodemailer = require('nodemailer');

async function sendMail(userEmail, name, donationDetails) {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASS
    }
  });

  const htmlBody = `
    <h2>Donation Received!</h2>
    <p>Dear ${name},</p>
    <p>We are writing to confirm that we have received your donation of ${donationDetails.Food_details.toUpperCase()} for ${donationDetails.Feedable_people} people in ${donationDetails.Location.toUpperCase()}. 
      Thank you for your generosity! Your contribution will help us feed those in need.</p>
    <p>Sincerely,</p>
    <p>The Feed Forward Team</p>
  `;

  const mailOptions = {
    from: '"Feed Forward" <process.env.USER>',
    to: userEmail,
    subject: `Feed Forward Donation Confirmation for ${name}`,
    text: `Donation Received! Your donation of ${donationDetails.Food_details.toUpperCase()} for ${donationDetails.Feedable_people} people in ${donationDetails.Location.toUpperCase()} has been received. Thank you!`,
    html: htmlBody
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendMail;
