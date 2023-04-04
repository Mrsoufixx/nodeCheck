var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'korchi.soufiane@gmail.com',
    pass: 'tst with you code application'
  }
});

var mailOptions = {
  from: 'korchi.soufiane@gmail.com',
  to: 'korchi.soufiane@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});