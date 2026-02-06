const nodemailer = require("nodemailer");
const path = require("path");
const { logger } = require("../logger");
const fromEmail = process.env.EMAIL_USER;
const appPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: fromEmail,
    pass: appPass,
  },
});

async function sendMail(to, name) {
  try {
    const info = await transporter.sendMail({
      from: `Task app <${fromEmail}>`,
      to: "ashikjain33@gmail.com",
      subject: "Welcome to Task App 🎉",
      text: `Hi ${name},Welcome to Task App! We're happy to have you with us.

          Thank You.`,
    });
    return info;
  } catch (error) {
    logger.error("Error sending email via Nodemailer", { error: error });
    return;
  }
}
transporter.verify((err, success) => {
  if (err) logger.error("SMTP connection error", { error: err });
  else logger.info("SMTP ready", { success });
});

module.exports = {
  sendMail,
};
