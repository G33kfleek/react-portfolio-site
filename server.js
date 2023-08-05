const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
console.log("Ready to Send");
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
co
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "***************@gmail.com",
    pass: "********",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});