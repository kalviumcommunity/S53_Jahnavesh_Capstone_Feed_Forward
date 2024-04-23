var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jahnavreddy12@gmail.com',
    pass: 'qevl rujy xjel mbgs'
  }
});

var mailOptions = {
  from: 'jahnavreddy1@gmail.com',
  to: 'jahnavesh.reddy@kalvium.community',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


// const nodemailer = require("nodemailer")

// const html = `
//   <h1>Hello World</h1>
//   <p>Nodemailer is useful</p>
// `;

// async function main(){
//   const transporter = nodemailer.createTransport({
//     host: 'mail.gmail.com',
//     port : 465,
//     secure : true,
//     auth: {
//       user: 'jahnavreddy1@gmail.com',
//       pass : 'jahnavreddy12@!'
//     }
//   })

//   const info = await transporter.sendMail({
//     from : 'Jahnavesh <jahnavreddy1@gmail.com>',
//     to :'jahnavesh.reddy@kalvium.community',
//     'subject' : 'Hello',
//     html:html

//   })
//   console.log("Message sent: "+info.messageId);
// }

// main()
// .catch(e=>console.log(e))