let requests = require('../models/Request');
const { generateId, validateRequest } = require('../utils/validate');

exports.getAllRequests = (req, res) => {
  let filtered = [...requests];
  if (req.query.status) filtered = filtered.filter(r => r.status === req.query.status);
  if (req.query.urgencyLevel) filtered = filtered.filter(r => r.urgencyLevel === req.query.urgencyLevel);
  if (req.query.type) filtered = filtered.filter(r => r.type === req.query.type);
  res.json(filtered);
};

exports.getRequestById = (req, res) => {
  const request = requests.find(r => r.id === parseInt(req.params.id));
  if (!request) return res.status(404).json({ error: 'Request not found' });
  res.json(request);
};

exports.addRequest = (req, res) => {
  const validation = validateRequest(req.body);
  if (!validation.valid) return res.status(400).json({ error: validation.message });

  const newRequest = { id: generateId(requests), status: "pending", createdAt: new Date(), assignedShelter: null, ...req.body };
  requests.push(newRequest);
  res.status(201).json(newRequest);
};

exports.updateRequest = (req, res) => {
  const index = requests.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Request not found' });

  requests[index] = { ...requests[index], ...req.body };
  res.json(requests[index]);
};
