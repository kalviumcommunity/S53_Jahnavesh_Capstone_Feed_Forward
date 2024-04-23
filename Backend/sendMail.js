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
