const nodemailer = require("nodemailer");
const path = require("path");
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
    console.error(error.message);
  }
}

//sendMail("ashikjain33@gmail.com", "Welcome to Task App 🎉");
module.exports = {
  sendMail,
};
