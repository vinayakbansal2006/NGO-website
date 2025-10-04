const express = require('express');
const router = express.Router();

// Mock auth (no database yet)
let users = [
  { id: 1, name: "Admin", email: "admin@email.com", password: "admin123" }
];

// Signup
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ error: 'Email already exists' });

  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User created', user: newUser });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  res.json({ message: 'Login successful', user });
});

module.exports = router;
