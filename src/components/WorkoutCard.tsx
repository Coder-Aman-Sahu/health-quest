import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Timer, MapPin } from 'lucide-react';

interface WorkoutCardProps {
  id: number;
  name: string;
  duration: number;
  location: string;
  description: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ 
  id, 
  name, 
  duration, 
  location, 
  description 
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name} • {duration} min</h3>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
          <Timer size={16} className="ml-4 mr-1" />
          <span>{duration} minutes</span>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex justify-between mt-2">
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
              Home
            </button>
            <button className="px-3 py-1 rounded-full bg-gray-800 text-white">
              Gym
            </button>
          </div>
          <button
            onClick={() => navigate(`/workout-session/${id}`)}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;