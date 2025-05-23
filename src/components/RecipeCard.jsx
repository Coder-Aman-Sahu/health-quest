import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  name,
  description,
  image,
  calories,
  protein,
  carbs,
  fats
}) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(`/recipe/${id}`)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600 mb-3 text-sm">{description}</p>
        
        <div className="flex items-center text-gray-700 mb-3">
          <ChefHat size={16} className="mr-1" />
          <span className="text-sm">Easy to prepare</span>
          <Clock size={16} className="ml-4 mr-1" />
          <span className="text-sm">15 minutes</span>
        </div>
        
        <div className="flex justify-between text-sm text-gray-700 border-t pt-3">
          <div>
            <div className="font-medium">{calories} kcal</div>
            <div>Calories</div>
          </div>
          <div>
            <div className="font-medium">{protein}g</div>
            <div>Protein</div>
          </div>
          <div>
            <div className="font-medium">{carbs}g</div>
            <div>Carbs</div>
          </div>
          <div>
            <div className="font-medium">{fats}g</div>
            <div>Fats</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;