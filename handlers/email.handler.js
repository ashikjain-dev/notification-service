const { sendEmail } = require("../services/email.sendgrid");
const { logger } = require("../logger");
const fromEmail = process.env.EMAIL_USER;
const sendMailer = async (to, firstName) => {
  try {
    const info = await sendEmail(to, firstName);
    logger.info("Email has been sent successfully");
  } catch (error) {
    logger.error(error.message, { stack: error.stack });
    throw new Error(error);
  }
};

module.exports = { sendMailer };
