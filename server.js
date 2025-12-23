const express = require("express");
const path = require("path");

const app = express();

// Static files
app.use(express.static("public"));

// Routes
const pagesRoutes = require("./routes/pages");
app.use("/", pagesRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

