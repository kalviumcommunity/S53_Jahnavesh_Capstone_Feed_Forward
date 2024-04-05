import nodeMailer from 'nodemailer'
const sendMail=async(userEmail,name)=>{
  let testAccount = await nodeMailer.createTestAccount();
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: '"Feed Forward" <process.env.USER>', 
      to: userEmail,
      subject: name,
      text: name, 
      html: <b>${name}</b>, 
    });
    console.log("Message sent: %s", info.messageId);
  
}

export default sendMail;