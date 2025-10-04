const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data for shelters
let shelters = [
  {
    id: 1,
    name: "Hope Shelter",
    address: "123 Main Street",
    capacity: 50,
    currentOccupancy: 32,
    phone: "9999999991",
    email: "info@hopeshelter.org",
    description: "A safe haven providing temporary accommodation and support services for homeless individuals and families.",
    services: ["Food", "Shelter", "Counseling", "Job Training"],
    operatingHours: "24/7",
    manager: "John Smith",
    image: "https://source.unsplash.com/400x250/?shelter,building",
    status: "active"
  },
  {
    id: 2,
    name: "Safe Haven",
    address: "456 Park Avenue",
    capacity: 30,
    currentOccupancy: 18,
    phone: "9999999992",
    email: "contact@safehaven.org",
    description: "Specialized shelter focusing on women and children in need of safe accommodation.",
    services: ["Food", "Shelter", "Medical Care", "Legal Aid"],
    operatingHours: "24/7",
    manager: "Sarah Johnson",
    image: "https://source.unsplash.com/400x250/?homeless,support",
    status: "active"
  },
  {
    id: 3,
    name: "Community Food & Shelter Center",
    address: "789 Broadway",
    capacity: 40,
    currentOccupancy: 25,
    phone: "9999999993",
    email: "help@communitycenter.org",
    description: "Community-driven center providing meals and temporary shelter with focus on rehabilitation.",
    services: ["Food", "Shelter", "Education", "Skills Training"],
    operatingHours: "6:00 AM - 10:00 PM",
    manager: "Michael Brown",
    image: "https://source.unsplash.com/400x250/?food,community",
    status: "active"
  }
];

// Mock data for requests
let requests = [
  {
    id: 1,
    type: "emergency_shelter",
    requesterName: "Jane Doe",
    requesterPhone: "555-0123",
    requesterEmail: "jane@email.com",
    urgencyLevel: "high",
    description: "Urgent need for shelter for family of 4 after house fire",
    location: "Downtown area",
    numberOfPeople: 4,
    specialNeeds: "Medical care needed for elderly member",
    status: "pending",
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    assignedShelter: null
  },
  {
    id: 2,
    type: "food_assistance",
    requesterName: "Robert Wilson",
    requesterPhone: "555-0456",
    requesterEmail: "robert@email.com",
    urgencyLevel: "medium",
    description: "Need food assistance for single parent with 2 children",
    location: "East side",
    numberOfPeople: 3,
    specialNeeds: "Vegetarian meals preferred",
    status: "approved",
    createdAt: new Date(Date.now() - 172800000), // 2 days ago
    assignedShelter: 1
  }
];

// Mock data for volunteers
let volunteers = [
  {
    id: 1,
    name: "Alice Cooper",
    email: "alice@email.com",
    phone: "555-1234",
    skills: ["Cooking", "Counseling", "Translation"],
    availability: "Weekends",
    assignedShelter: 1,
    status: "active",
    joinedDate: new Date(Date.now() - 2592000000) // 30 days ago
  },
  {
    id: 2,
    name: "Bob Martinez",
    email: "bob@email.com",
    phone: "555-5678",
    skills: ["Medical Care", "Administration"],
    availability: "Weekdays",
    assignedShelter: 2,
    status: "active",
    joinedDate: new Date(Date.now() - 1296000000) // 15 days ago
  }
];

// Helper functions
const generateId = (array) => {
  return array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1;
};

const validateShelter = (shelter) => {
  const required = ['name', 'address', 'capacity', 'phone', 'email'];
  for (let field of required) {
    if (!shelter[field]) {
      return { valid: false, message: `${field} is required` };
    }
  }
  return { valid: true };
};

const validateRequest = (request) => {
  const required = ['type', 'requesterName', 'requesterPhone', 'urgencyLevel', 'description', 'numberOfPeople'];
  for (let field of required) {
    if (!request[field]) {
      return { valid: false, message: `${field} is required` };
    }
  }
  return { valid: true };
};

// Routes

// Test route
app.get("/", (req, res) => {
  res.json({ 
    message: "NGO Management System API",
    version: "1.0.0",
    endpoints: {
      shelters: "/api/shelters",
      requests: "/api/requests",
      volunteers: "/api/volunteers"
    }
  });
});

// SHELTER ROUTES

// Get all shelters with optional filtering
app.get("/api/shelters", (req, res) => {
  try {
    let filteredShelters = [...shelters];
    
    // Filter by status
    if (req.query.status) {
      filteredShelters = filteredShelters.filter(s => s.status === req.query.status);
    }
    
    // Filter by availability (shelters with space)
    if (req.query.available === 'true') {
      filteredShelters = filteredShelters.filter(s => s.currentOccupancy < s.capacity);
    }
    
    // Search by name or address
    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      filteredShelters = filteredShelters.filter(s => 
        s.name.toLowerCase().includes(searchTerm) || 
        s.address.toLowerCase().includes(searchTerm)
      );
    }
    
    res.json(filteredShelters);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get shelter by ID
app.get("/api/shelters/:id", (req, res) => {
  try {
    const shelter = shelters.find(s => s.id === parseInt(req.params.id));
    if (!shelter) {
      return res.status(404).json({ error: "Shelter not found" });
    }
    res.json(shelter);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add a new shelter
app.post("/api/shelters", (req, res) => {
  try {
    const validation = validateShelter(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.message });
    }
    
    const newShelter = {
      id: generateId(shelters),
      currentOccupancy: 0,
      services: [],
      operatingHours: "9:00 AM - 5:00 PM",
      status: "active",
      ...req.body
    };
    
    shelters.push(newShelter);
    res.status(201).json(newShelter);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update shelter
app.put("/api/shelters/:id", (req, res) => {
  try {
    const shelterIndex = shelters.findIndex(s => s.id === parseInt(req.params.id));
    if (shelterIndex === -1) {
      return res.status(404).json({ error: "Shelter not found" });
    }
    
    const validation = validateShelter(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.message });
    }
    
    shelters[shelterIndex] = { ...shelters[shelterIndex], ...req.body };
    res.json(shelters[shelterIndex]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete shelter
app.delete("/api/shelters/:id", (req, res) => {
  try {
    const shelterIndex = shelters.findIndex(s => s.id === parseInt(req.params.id));
    if (shelterIndex === -1) {
      return res.status(404).json({ error: "Shelter not found" });
    }
    
    shelters.splice(shelterIndex, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// REQUEST ROUTES

// Get all requests with filtering
app.get("/api/requests", (req, res) => {
  try {
    let filteredRequests = [...requests];
    
    if (req.query.status) {
      filteredRequests = filteredRequests.filter(r => r.status === req.query.status);
    }
    
    if (req.query.urgencyLevel) {
      filteredRequests = filteredRequests.filter(r => r.urgencyLevel === req.query.urgencyLevel);
    }
    
    if (req.query.type) {
      filteredRequests = filteredRequests.filter(r => r.type === req.query.type);
    }
    
    res.json(filteredRequests);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get request by ID
app.get("/api/requests/:id", (req, res) => {
  try {
    const request = requests.find(r => r.id === parseInt(req.params.id));
    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create new request
app.post("/api/requests", (req, res) => {
  try {
    const validation = validateRequest(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.message });
    }
    
    const newRequest = {
      id: generateId(requests),
      status: "pending",
      createdAt: new Date(),
      assignedShelter: null,
      ...req.body
    };
    
    requests.push(newRequest);
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update request status
app.put("/api/requests/:id", (req, res) => {
  try {
    const requestIndex = requests.findIndex(r => r.id === parseInt(req.params.id));
    if (requestIndex === -1) {
      return res.status(404).json({ error: "Request not found" });
    }
    
    requests[requestIndex] = { ...requests[requestIndex], ...req.body };
    res.json(requests[requestIndex]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// VOLUNTEER ROUTES

// Get all volunteers
app.get("/api/volunteers", (req, res) => {
  try {
    let filteredVolunteers = [...volunteers];
    
    if (req.query.shelter) {
      filteredVolunteers = filteredVolunteers.filter(v => v.assignedShelter === parseInt(req.query.shelter));
    }
    
    if (req.query.status) {
      filteredVolunteers = filteredVolunteers.filter(v => v.status === req.query.status);
    }
    
    res.json(filteredVolunteers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add new volunteer
app.post("/api/volunteers", (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.phone) {
      return res.status(400).json({ error: "Name, email, and phone are required" });
    }
    
    const newVolunteer = {
      id: generateId(volunteers),
      skills: [],
      availability: "Flexible",
      status: "active",
      joinedDate: new Date(),
      ...req.body
    };
    
    volunteers.push(newVolunteer);
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DASHBOARD/STATISTICS ROUTES

// Get dashboard statistics
app.get("/api/dashboard/stats", (req, res) => {
  try {
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
    
    stats.occupancyRate = stats.totalCapacity > 0 ? 
      ((stats.totalOccupancy / stats.totalCapacity) * 100).toFixed(1) : 0;
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 NGO Management System Backend running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard stats available at http://localhost:${PORT}/api/dashboard/stats`);
});