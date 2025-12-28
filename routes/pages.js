const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/home.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/contact.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/login.html"));
});

module.exports = router;


