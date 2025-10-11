// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const connectDB = require('../../mydb/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB before routes
connectDB()
  .then(() => {
    console.log("✅ MongoDB connected successfully");

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
      res.json({ message: "Backend + MongoDB running successfully!" });
    });

    // Start server only after DB connects
    app.listen(config.port, () => {
      console.log(`🚀 Backend running at ${config.baseURL}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
