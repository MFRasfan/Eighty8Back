const nodemailer = require('nodemailer')

const sendEmail  =  async ({ subject, email, text, html, code }) => {
  try {
    console.log("inside send email")
    const mailOptions = {
      from: process.env.SMPT_USER,
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
          user: process.env.SMPT_USER,
          pass: process.env.SMPT_PASS 
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