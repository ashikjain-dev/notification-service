const express = require("express");
require("dotenv").config();
const { logger } = require("./logger");
const { sendMailer } = require("./handlers/email.handler");
const { errorHandler } = require("./middlewares/error");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.post("/events", async (req, res, next) => {
  logger.info("Event received", { body: req.body });
  const { type, payload } = req.body;
  if (type == "USER_SIGNED_UP") {
    logger.info("Processing USER_SIGNED_UP event", { email: payload.email });
    await sendMailer(payload.email, payload.firstName);
    res.json({ data: "email has been sent" });
    return;
  }
  res.json({ data: "ok" });
});
app.get("/", (req, res, next) => {
  res.json({ data: "notification service is up and running! " });
});
// 404 handler
app.use((req, res, next) => {
  const error = new Error("page not found");
  error.statusCode = 404;
  next(error);
});
// Global Error Handler
app.use(errorHandler);
app.listen(PORT, () => {
  logger.info(`The notification service is up and running on the port: ${PORT}`);
});
