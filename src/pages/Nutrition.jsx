import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';

const Nutrition: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch recipes - in a real app this would be an API call
    const fetchRecipes = async () => {
      try {
        // Simulating API request
        setTimeout(() => {
          const mockRecipes = [
            {
              id: 1,
              name: "Grilled Chicken Salad",
              description: "Balanced meal packed with greens",
              image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
              calories: 330,
              protein: 40,
              carbs: 20,
              fats: 10
            },
            {
              id: 2,
              name: "Protein Smoothie",
              description: "Quick post-workout recovery drink",
              image: "https://images.pexels.com/photos/3872178/pexels-photo-3872178.jpeg",
              calories: 265,
              protein: 25,
              carbs: 30,
              fats: 5
            },
            {
              id: 3,
              name: "Avocado Toast",
              description: "Healthy fats and whole grains",
              image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg",
              calories: 380,
              protein: 15,
              carbs: 35,
              fats: 20
            }
          ];
          
          setRecipes(mockRecipes);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };
    
    fetchRecipes();
  }, []);
  
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  const [activeMealType, setActiveMealType] = useState('Breakfast');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Meal Recommendations</h1>
      
      <div className="flex overflow-x-auto mb-6 pb-2">
        {mealTypes.map((mealType) => (
          <button
            key={mealType}
            onClick={() => setActiveMealType(mealType)}
            className={`flex-shrink-0 px-6 py-2 border-b-2 ${
              activeMealType === mealType 
                ? 'border-blue-600 text-blue-600 font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {mealType}
          </button>
        ))}
      </div>
      
      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading recipes...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              description={recipe.description}
              image={recipe.image}
              calories={recipe.calories}
              protein={recipe.protein}
              carbs={recipe.carbs}
              fats={recipe.fats}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Nutrition;