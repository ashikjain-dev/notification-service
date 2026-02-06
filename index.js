const express = require("express");
require("dotenv").config();
const { sendMailer } = require("./handlers/email.handler");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.post("/events", async (req, res, next) => {
  try {
    console.log(req.body);
    const { type, payload } = req.body;
    if (type == "USER_SIGNED_UP") {
      console.log("in sending email");
      await sendMailer(payload.email, payload.firstName);
      res.json({ data: "email has been sent" });
      return;
    }
    res.json({ data: "ok" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ data: "something went wrong" });
  }
});
app.get("/", (req, res, next) => {
  res.json({ data: "notification service is up and running! " });
});
app.use((req, res, next) => {
  res.status(404).json({ data: "page not found" });
});
app.listen(PORT, () => {
  console.log(
    `The notification service is up and running on the port: ${PORT}`,
  );
});
