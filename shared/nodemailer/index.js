const nodemailer = require('nodemailer')

const sendEmail  =  async ({ subject, email, text, html, code }) => {
  try {
    console.log("inside send email")
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      text: text || `Your OTP code is ${code}. This code will expire in 1 hour.`,
      html: html || `<p>Your OTP code is <strong>${code}</strong>. This code will expire in 1 hour.</p>`,
    };

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.office365.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: 'techsyhub@gmail.com',  
    //     pass: 'fccywlxjyucghsei', 
    //   },
    // });

    const transporter = nodemailer.createTransport({    
      host: "smtpout.secureserver.net",  
      secure: true,
      // secureConnection: false, // TLS requires secureConnection to be false
      // tls: {
      //     ciphers:'SSLv3'
      // },
      // requireTLS:true,
      port: 465,
      debug: true,
      auth: {
          user: "info@eighty8alpha.com",
          pass: "tjyjcvgrcdcrktmg" 
      }
  })

    await transporter.sendMail(mailOptions);
    console.log("Email sent");
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

module.exports={sendEmail}