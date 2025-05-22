import express from 'express';
import { reminders } from '../data/reminders.js';

const router = express.Router();

// Get all reminders
router.get('/', (req, res) => {
  res.json(reminders);
});

// Update reminder status
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const reminderIndex = reminders.findIndex(r => r.id === parseInt(id));
  
  if (reminderIndex === -1) {
    return res.status(404).json({ message: 'Reminder not found' });
  }
  
  reminders[reminderIndex] = {
    ...reminders[reminderIndex],
    status: status || reminders[reminderIndex].status
  };
  
  res.json(reminders[reminderIndex]);
});

// Create new reminder
router.post('/', (req, res) => {
  const { type, time } = req.body;
  
  const newReminder = {
    id: reminders.length + 1,
    type,
    time,
    status: 'pending'
  };
  
  reminders.push(newReminder);
  res.status(201).json(newReminder);
});

export const reminderRoutes = router;