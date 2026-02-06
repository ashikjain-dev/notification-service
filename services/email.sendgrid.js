const sgMail = require("@sendgrid/mail");
const path = require("path");
const { logger } = require("../logger");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.EMAIL_USER;
sgMail.setApiKey(API_KEY);

async function sendEmail(to, name) {
  try {
    await sgMail.send({
      to: to,
      from: FROM_EMAIL,
      subject: "Welcome to Task App 🎉",
      text: `Hi ${name},Welcome to Task App! We're happy to have you with us.

          Thank You.`,
    });
    logger.info("Email sent successfully via SendGrid!");
  } catch (error) {
    logger.error("Error sending email via SendGrid", { error: error });
  }
}

module.exports = { sendEmail };
