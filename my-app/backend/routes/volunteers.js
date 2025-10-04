const express = require('express');
const router = express.Router();
let volunteers = require('../models/Volunteer');
const { generateId } = require('../utils/validate');

// Get all volunteers
router.get('/', (req, res) => {
  let filtered = [...volunteers];
  if (req.query.shelter) filtered = filtered.filter(v => v.assignedShelter === parseInt(req.query.shelter));
  if (req.query.status) filtered = filtered.filter(v => v.status === req.query.status);
  res.json(filtered);
});

// Add new volunteer
router.post('/', (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.phone) return res.status(400).json({ error: 'Name, email, and phone required' });

  const newVolunteer = { id: generateId(volunteers), skills: [], availability: "Flexible", status: "active", joinedDate: new Date(), ...req.body };
  volunteers.push(newVolunteer);
  res.status(201).json(newVolunteer);
});

module.exports = router;
