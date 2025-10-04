const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const shelterRoutes = require("./routes/shelters");
const requestRoutes = require("./routes/requests");
const volunteerRoutes = require("./routes/volunteers");
const dashboardRoutes = require("./routes/dashboard");

app.use("/api/shelters", shelterRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Base test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully!" });
});

// Start server
app.listen(config.port, () => {
  console.log(`🚀 Backend running at ${config.baseURL}`);
});
