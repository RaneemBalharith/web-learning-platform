const express = require("express");
const path = require("path");

const router = express.Router();

// Home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Contact page
router.get("/contact", (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Contact</title>
      </head>
      <body>
        <h1>Contact Page</h1>
        <p>This page will be improved later.</p>
      </body>
    </html>
  `);
});

module.exports = router;
