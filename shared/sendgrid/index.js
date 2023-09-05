const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({subject, email,text, html, code}) => {
  try {
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: subject,
      text: text || `Your OTP code is ${code}. This code will expire in 1 hour.`,
      html:  html || `<p>Your OTP code is <strong>${code}</strong>. This code will expire in 1 hour.</p>`,
    };
    await sgMail.send(msg);
    
  } catch (error) {
    console.log(`Error :${error.body}`)
  }
  };

  module.exports={sendEmail}