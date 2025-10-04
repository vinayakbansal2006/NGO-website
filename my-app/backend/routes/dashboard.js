const express = require('express');
const router = express.Router();
let shelters = require('../models/Shelter');
let requests = require('../models/Request');
let volunteers = require('../models/Volunteer');

// Dashboard stats
router.get('/stats', (req, res) => {
  const stats = {
    totalShelters: shelters.length,
    activeShelters: shelters.filter(s => s.status === 'active').length,
    totalCapacity: shelters.reduce((sum, s) => sum + s.capacity, 0),
    totalOccupancy: shelters.reduce((sum, s) => sum + s.currentOccupancy, 0),
    totalRequests: requests.length,
    pendingRequests: requests.filter(r => r.status === 'pending').length,
    urgentRequests: requests.filter(r => r.urgencyLevel === 'high').length,
    totalVolunteers: volunteers.length,
    activeVolunteers: volunteers.filter(v => v.status === 'active').length
  };
  stats.occupancyRate = stats.totalCapacity > 0 ? ((stats.totalOccupancy / stats.totalCapacity) * 100).toFixed(1) : 0;
  res.json(stats);
});

module.exports = router;
