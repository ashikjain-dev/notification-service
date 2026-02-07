const { sendEmail } = require("../services/email.sendgrid");
const { logger } = require("../logger");
const fromEmail = process.env.EMAIL_USER;
const sendMailer = async (to, firstName) => {
  await sendEmail(to, firstName);
  logger.info("Email has been sent successfully");
};

module.exports = { sendMailer };
