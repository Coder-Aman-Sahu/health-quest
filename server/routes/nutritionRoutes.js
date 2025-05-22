import express from 'express';
import { meals, recipes } from '../data/nutrition.js';

const router = express.Router();

// Get meal recommendations
router.get('/meals', (req, res) => {
  res.json(meals);
});

// Get specific recipe
router.get('/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  
  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }
  
  res.json(recipe);
});

// Log food intake
router.post('/log', (req, res) => {
  const { mealType, foods, totalCalories } = req.body;
  
  // In a real app, this would store the food log in a database
  res.json({
    success: true,
    message: 'Food logged successfully',
    data: { mealType, foods, totalCalories, loggedAt: new Date() }
  });
});

export const nutritionRoutes = router;