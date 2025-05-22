import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, CheckCircle } from 'lucide-react';

const Recipe: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch recipe details - in a real app this would be an API call
    const fetchRecipeDetails = async () => {
      try {
        // Simulating API request
        setTimeout(() => {
          const mockRecipe = {
            id: 1,
            name: "Grilled Chicken Salad",
            description: "Balanced meal packed with greens",
            image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
            ingredients: [
              "Grilled Chicken",
              "Spinach Leaves",
              "Cherry Tomatoes",
              "Olive Oil Dressing"
            ],
            macros: {
              protein: 40,
              carbs: 20,
              fats: 10
            },
            calories: 330,
            steps: [
              "Grill chicken until golden brown.",
              "Chop spinach and mix with tomatoes.",
              "Add chicken and drizzle with dressing."
            ]
          };
          
          setRecipe(mockRecipe);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      }
    };
    
    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Recipe not found</p>
        <button
          onClick={() => navigate('/nutrition')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/nutrition')}
        className="flex items-center text-blue-600 mb-6"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Recipes
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="h-64 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
          <p className="text-gray-600 mb-4">{recipe.description}</p>
          
          <div className="flex items-center text-gray-700 mb-6">
            <Clock size={18} className="mr-2" />
            <span>15 minutes</span>
            <span className="mx-3">•</span>
            <span>Easy</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start mb-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={18} className="text-green-500" />
                </div>
                <span className="ml-3">{ingredient}</span>
              </li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Macros</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-blue-700">{recipe.macros.protein}g</div>
              <div className="text-gray-600">Protein</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-green-700">{recipe.macros.carbs}g</div>
              <div className="text-gray-600">Carbs</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-orange-700">{recipe.macros.fats}g</div>
              <div className="text-gray-600">Fats</div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Recipe</h2>
          <ol className="list-decimal pl-5">
            {recipe.steps.map((step, index) => (
              <li key={index} className="mb-3">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;