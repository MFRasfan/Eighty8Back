require("dotenv").config()
const nodemailer = require('nodemailer')

const sendEmail  =  async ({ subject, email, text, html, code }) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      text: text || `Your OTP code is ${code}. This code will expire in 1 hour.`,
      html: html || `<p>Your OTP code is <strong>${code}</strong>. This code will expire in 1 hour.</p>`,
    };

  
    const transporter = nodemailer.createTransport({    
      host: "smtp.office365.com",  
      secure: false,
      port: 587,
      debug: true,
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS 
      }
  })

    const emailResponse= await transporter.sendMail(mailOptions);
    console.log("email response", emailResponse)
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

module.exports={sendEmail}