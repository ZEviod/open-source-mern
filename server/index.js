const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const messagesFile = path.join(__dirname, "messages.log");

// Ensure messages file exists
try {
  fs.closeSync(fs.openSync(messagesFile, "a"));
} catch (err) {
  console.error("Could not create messages.log", err);
}

app.post(
  "/api/contact",
  [
    body("fullName")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Full name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("message")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Message too short"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, message } = req.body;
    const entry = {
      time: new Date().toISOString(),
      fullName,
      email,
      message,
    };

    // Append to log file (simulate saving / sending email)
    fs.appendFile(messagesFile, JSON.stringify(entry) + "\n", (err) => {
      if (err) {
        console.error("Failed to write message", err);
        return res.status(500).json({ error: "Failed to save message" });
      }
      // Respond success
      return res
        .status(201)
        .json({ status: "ok", message: "Message received" });
    });
  }
);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
