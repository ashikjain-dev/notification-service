const { sendMail } = require("../services/email.service");
const fromEmail = process.env.EMAIL_USER;
const sendMailer = async (to, firstName) => {
  try {
    const info = await sendMail(to, firstName);
    console.log(info.messageId);
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};

module.exports = { sendMailer };
