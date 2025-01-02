import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com", // Replace with your SES SMTP endpoint
  port: 587, // For secure connection
  secure: true, // Use TLS
  auth: {
    user: process.env.USER_USERNAME, // SES SMTP username
    pass: process.env.USER_APP_PASS, // SES SMTP password
  },
});

// Email options remain the same

export const sendMail = async (req, res, next) => {
    console.log("SMTP USER:", process.env.USER_USERNAME);
console.log("SMTP PASS:", process.env.USER_APP_PASS);

  console.log("request gone")
  try {
    const mailOptions = {
      from: process.env.USER_MAIL, // Must be a verified email in Amazon SES
      to: req.body.email,
      subject: "Connect With Stylic",
      text: "This is a test email sent using Amazon SES with Nodemailer!",
      html: "<h1>Hello</h1><p>This is a test email sent using <b>Amazon SES</b> with Nodemailer!</p>",
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error("Error:", error);
      }
      console.log("Email sent:", info);
    });
    res.status(200).json("mail sended.")
  } catch (err) {
    next(err);
  }
};
