const express = require('express');
const router = express.Router();
let shelters = require('../models/Shelter');
const { generateId, validateShelter } = require('../utils/validate');

// Get all shelters
router.get('/', (req, res) => {
  let filtered = [...shelters];

  if (req.query.status) filtered = filtered.filter(s => s.status === req.query.status);
  if (req.query.available === 'true') filtered = filtered.filter(s => s.currentOccupancy < s.capacity);
  if (req.query.search) {
    const term = req.query.search.toLowerCase();
    filtered = filtered.filter(s => s.name.toLowerCase().includes(term) || s.address.toLowerCase().includes(term));
  }

  res.json(filtered);
});

// Get shelter by ID
router.get('/:id', (req, res) => {
  const shelter = shelters.find(s => s.id === parseInt(req.params.id));
  if (!shelter) return res.status(404).json({ error: 'Shelter not found' });
  res.json(shelter);
});

// Add new shelter
router.post('/', (req, res) => {
  const validation = validateShelter(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.message });

  const newShelter = { id: generateId(shelters), currentOccupancy: 0, services: [], operatingHours: "9:00 AM - 5:00 PM", status: "active", ...req.body };
  shelters.push(newShelter);
  res.status(201).json(newShelter);
});

// Update shelter
router.put('/:id', (req, res) => {
  const index = shelters.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Shelter not found' });

  const validation = validateShelter(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.message });

  shelters[index] = { ...shelters[index], ...req.body };
  res.json(shelters[index]);
});

// Delete shelter
router.delete('/:id', (req, res) => {
  const index = shelters.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Shelter not found' });

  shelters.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
