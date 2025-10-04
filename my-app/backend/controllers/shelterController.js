let shelters = require('../models/Shelter');
const { generateId, validateShelter } = require('../utils/validate');

exports.getAllShelters = (req, res) => {
  let filtered = [...shelters];
  if (req.query.status) filtered = filtered.filter(s => s.status === req.query.status);
  if (req.query.available === 'true') filtered = filtered.filter(s => s.currentOccupancy < s.capacity);
  if (req.query.search) {
    const term = req.query.search.toLowerCase();
    filtered = filtered.filter(s => s.name.toLowerCase().includes(term) || s.address.toLowerCase().includes(term));
  }
  res.json(filtered);
};

exports.getShelterById = (req, res) => {
  const shelter = shelters.find(s => s.id === parseInt(req.params.id));
  if (!shelter) return res.status(404).json({ error: 'Shelter not found' });
  res.json(shelter);
};

exports.addShelter = (req, res) => {
  const validation = validateShelter(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.message });

  const newShelter = { id: generateId(shelters), currentOccupancy: 0, services: [], operatingHours: "9:00 AM - 5:00 PM", status: "active", ...req.body };
  shelters.push(newShelter);
  res.status(201).json(newShelter);
};

exports.updateShelter = (req, res) => {
  const index = shelters.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Shelter not found' });

  const validation = validateShelter(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.message });

  shelters[index] = { ...shelters[index], ...req.body };
  res.json(shelters[index]);
};

exports.deleteShelter = (req, res) => {
  const index = shelters.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Shelter not found' });

  shelters.splice(index, 1);
  res.status(204).send();
};
