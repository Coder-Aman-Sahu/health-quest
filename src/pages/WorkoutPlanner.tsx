import React, { useState, useEffect } from 'react';
import WorkoutCard from '../components/WorkoutCard';

const WorkoutPlanner: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Mon');
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  useEffect(() => {
    // Fetch workouts - in a real app this would be an API call
    const fetchWorkouts = async () => {
      try {
        // Simulating API request
        setTimeout(() => {
          const mockWorkouts = [
            {
              id: 1,
              name: "HIIT",
              duration: 20,
              location: "Home",
              description: "High-intensity interval training to burn fat and improve cardio"
            },
            {
              id: 2,
              name: "Strength",
              duration: 45,
              location: "Gym",
              description: "Strength training to build muscle and increase metabolism"
            },
            {
              id: 3,
              name: "Cardio",
              duration: 30,
              location: "Home",
              description: "Cardio workout to improve heart health and endurance"
            },
            {
              id: 4,
              name: "Yoga",
              duration: 15,
              location: "Home",
              description: "Yoga session for flexibility and stress reduction"
            }
          ];
          
          setWorkouts(mockWorkouts);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setLoading(false);
      }
    };
    
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Weekly Workout Planner</h1>
      
      <div className="flex overflow-x-auto mb-6 pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex-shrink-0 px-6 py-2 border-b-2 ${
              activeDay === day 
                ? 'border-blue-600 text-blue-600 font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      
      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading workouts...</p>
        </div>
      ) : (
        <div>
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              id={workout.id}
              name={workout.name}
              duration={workout.duration}
              location={workout.location}
              description={workout.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanner;