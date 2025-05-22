import express from 'express';
import { workouts, exercises } from '../data/workouts.js';

const router = express.Router();

// Get all workout plans
router.get('/plans', (req, res) => {
  res.json(workouts);
});

// Get specific workout plan
router.get('/plans/:id', (req, res) => {
  const plan = workouts.find(w => w.id === parseInt(req.params.id));
  
  if (!plan) {
    return res.status(404).json({ message: 'Workout plan not found' });
  }
  
  res.json(plan);
});

// Get exercise library
router.get('/exercises', (req, res) => {
  res.json(exercises);
});

// Record completed workout
router.post('/complete', (req, res) => {
  const { workoutId, duration, exercises } = req.body;
  
  // In a real app, this would store the completed workout in a database
  res.json({
    success: true,
    message: 'Workout recorded successfully',
    data: { workoutId, duration, exercises, completedAt: new Date() }
  });
});

export const workoutRoutes = router;