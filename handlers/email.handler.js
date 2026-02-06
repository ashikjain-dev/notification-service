const { sendEmail } = require("../services/email.sendgrid");
const fromEmail = process.env.EMAIL_USER;
const sendMailer = async (to, firstName) => {
  try {
    const info = await sendEmail(to, firstName);
    console.log("email has been sent!");
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};

module.exports = { sendMailer };
