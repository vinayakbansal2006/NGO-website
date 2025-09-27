// index.js (backend)

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to local MongoDB (ngoDB is the database name)
mongoose.connect("mongodb://127.0.0.1:27017/ngoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Schema & Model for Shelters
const ShelterSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  address: String,
});

const Shelter = mongoose.model("Shelter", ShelterSchema);

// ✅ Routes

// Test route
app.get("/", (req, res) => {
  res.send("NGO Backend Running ✅");
});

// Get all shelters
app.get("/api/shelters", async (req, res) => {
  try {
    const shelters = await Shelter.find();
    res.json(shelters);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch shelters" });
  }
});

// Add a new shelter
app.post("/api/shelters", async (req, res) => {
  try {
    const shelter = new Shelter(req.body);
    await shelter.save();
    res.json(shelter);
  } catch (err) {
    res.status(500).json({ error: "Failed to add shelter" });
  }
});

// Server running
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
