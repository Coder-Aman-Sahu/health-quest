import express from 'express';
import { users } from '../data/users.js';

const router = express.Router();

// Get user profile
router.get('/profile', (req, res) => {
  // In a real app, this would fetch from a database based on authenticated user
  res.json(users[0]);
});

// Update user profile
router.put('/profile', (req, res) => {
  const { name, age, weight, height } = req.body;
  
  // In a real app, this would update the database
  users[0] = {
    ...users[0],
    name: name || users[0].name,
    age: age || users[0].age,
    weight: weight || users[0].weight,
    height: height || users[0].height,
  };
  
  res.json(users[0]);
});

// Login route - simplified for demo
router.post('/login', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ message: 'Please enter your name' });
  }
  
  // In a real app, would validate credentials and generate a token
  res.json({
    success: true,
    user: {
      id: 1,
      name,
      token: 'sample-token-123'
    }
  });
});

export const userRoutes = router;