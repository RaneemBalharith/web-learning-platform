const express = require("express");
const path = require("path");

const app = express();

/* ✅ CSP واضح */
app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src * 'unsafe-inline' 'unsafe-eval'"
    );
    next();
});
// Static files
app.use(express.static("public"));
app.use("/locales", express.static("locales"));

// Routes
const pagesRoutes = require("./routes/pages");
app.use("/", pagesRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

