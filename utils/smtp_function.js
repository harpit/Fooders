const nodemailer = require('nodemailer');

async function sendEmail(userEmail , message) {

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : process.env.AUTH_EMAIL,
            pass : process.env.AUTH_PASSWORD
        }
      });

      const mailOptions = {
        from : process.env.AUTH_EMAIL,
        to : userEmail,
        subject : "Fooders verification code",
        html : `<h1>Fooders Verification Email</h1>
        <p>Your verification code is</p>
        <h2 style = "color:blue;">${message}</h2>
        <p>Please enter this code on verification page to complete registration process</p>
        <p>If you not request this , please ignore it!</p>`
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Mail sent successfully');
      } catch (error) {
        console.log('Email sending failed: ' + error.message);
      }
}

module.exports = sendEmail;