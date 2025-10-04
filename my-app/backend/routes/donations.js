const express = require('express');
const router = express.Router();

let donations = [];

// Get all donations
router.get('/', (req, res) => {
  res.json(donations);
});

// Add donation
router.post('/', (req, res) => {
  const { donorName, email, amount, shelterId, message } = req.body;
  if (!donorName || !email || !amount) return res.status(400).json({ error: 'Name, email, amount required' });

  const newDonation = { id: donations.length + 1, donorName, email, amount, shelterId: shelterId || null, message: message || '', createdAt: new Date() };
  donations.push(newDonation);
  res.status(201).json(newDonation);
});

module.exports = router;
