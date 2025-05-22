import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const WorkoutSession: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch workout details - in a real app this would be an API call
    const fetchWorkoutDetails = async () => {
      try {
        // Simulating API request
        setTimeout(() => {
          const mockExercises = [
            { id: 1, name: "Jumping Jacks", duration: "30s", completed: false },
            { id: 2, name: "Wall Sit", duration: "30s", completed: false },
            { id: 3, name: "Push-ups", duration: "30s", completed: false }
          ];
          
          setExercises(mockExercises);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching workout details:', error);
        setLoading(false);
      }
    };
    
    fetchWorkoutDetails();
  }, [id]);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isActive) {
      interval = window.setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);
  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };
  
  const toggleExerciseCompletion = (exerciseId: number) => {
    setExercises(exercises.map(exercise => 
      exercise.id === exerciseId 
        ? { ...exercise, completed: !exercise.completed } 
        : exercise
    ));
  };
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const handleCompleteWorkout = () => {
    // In a real app, this would save the workout completion to the server
    navigate('/workout-planner');
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading workout session...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">Workout Session</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-6 text-center">
        <div className="text-6xl font-bold mb-4">{formatTime(time)}</div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={toggleTimer}
            className={`px-6 py-2 rounded-md font-medium ${
              isActive 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          
          <button
            onClick={resetTimer}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium text-gray-800"
          >
            Reset
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="px-6 py-4 bg-gray-100">
          <h2 className="text-xl font-bold text-gray-700">EXERCISE LIST</h2>
        </div>
        
        <div>
          {exercises.map((exercise) => (
            <div 
              key={exercise.id}
              className="flex items-center justify-between px-6 py-4 border-b border-gray-200"
            >
              <div>
                <h3 className="font-medium">{exercise.name}</h3>
                <div className="text-gray-600">{exercise.duration}</div>
              </div>
              
              <button
                onClick={() => toggleExerciseCompletion(exercise.id)}
                className={`px-4 py-2 rounded-md ${
                  exercise.completed 
                    ? 'bg-gray-200 text-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {exercise.completed ? 'Done' : 'Done'}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={handleCompleteWorkout}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
      >
        Complete Workout
      </button>
    </div>
  );
};

export default WorkoutSession;