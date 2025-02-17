import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config()


const transporter = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com", // Replace with your SES SMTP endpoint
  port: 587, // For secure connection
  secure: false, // Use TLS
  auth: {
    user: process.env.USER_USERNAME, // SES SMTP username
    pass: process.env.USER_APP_PASS, // SES SMTP password
  },
  tls: {
    rejectUnauthorized: true,
  },
});

// Email options remain the same

export const sendMail = async (req, res, next) => {
  try {
    const mailOptions = {
      from: process.env.USER_MAIL, // Must be a verified email in Amazon SES
      to: req.body.email,
      subject: "Connect With Stylic",
      text: "This is a test email sent using Amazon SES with Nodemailer!",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stylic Newsletter</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
          }
          .header h1 {
            font-size: 24px;
            color: #1B345C;
          }
          .product {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
          }
          .product img {
            width: 150px;
            height: auto;
          }
          .product-details {
            flex: 1;
            /* margin-left: 5px; */
          }
          .button {
            display: inline-block;
            background-color: #1B345C;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            font-size: 12px;
            color: #888;
          }
          .footer a {
            color: #2a9d8f;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Exciting Product Update from Stylic AI</h1>
          </div>
          <p>Hello,</p>
          <p>We hope this message finds you well! We're excited to bring you the latest updates and offers from Stylic AI.</p>
          
          <div class="product">
            <div class="product-details">
              <h2>AI Photoshoot (Models without limit)</h2>
              <p>At Stylic.ai, we are redefining fashion photography
                  through the power of AI. Traditional model photoshoots
                  are expensive, time-consuming, and often restrictive.
                  Our cutting-edge AI technology allows fashion brands,
                  e-commerce stores, and garment manufacturers to
                  generate high-quality, photorealistic model images
                  without the need for physical photoshoots.</p>
              <a href="https://stylic.ai/contact" class="button">Connect Now</a>
            </div>
          </div>
      
          <h3>Special Offer</h3>
          <p>For a limited time, enjoy <strong>5% off</strong> your next purchase with promo code <strong>STY78L23C</strong> at checkout!</p>
      
          <p>Stay Connected:</p>
          <p>
            <a href="https://www.facebook.com/stylicai">Facebook</a> | 
            <a href="https://www.instagram.com/stylicai/">Instagram</a> | 
            <a href="https://www.linkedin.com/company/stylicai/">Linkedin</a>
          </p>
      
          <div class="footer">
            <p>Thank you for being part of the Stylic family! We look forward to continuing to provide you with top-notch products.</p>
            <p>Best regards, <br> The Stylic Team</p>
          </div>
        </div>
      </body>
      </html>`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error("Error:", error);
      }
    });
    
    res.status(200).json("mail sended.")
  } catch (err) {
    next(err);
  }
};
