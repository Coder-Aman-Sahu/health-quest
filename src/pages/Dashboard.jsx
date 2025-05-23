import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet, Dumbbell, Moon } from 'lucide-react';
import InsightsCard from '../components/InsightsCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    // Get user data from localStorage in a real app
    const userData = localStorage.getItem('healthquestUser');
    if (userData) {
      const { name } = JSON.parse(userData);
      setUserName(name);
    }
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Welcome back, {userName}!</h1>
        <p className="text-gray-600">Here's your health summary for today</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-5 flex flex-col items-center">
          <h3 className="font-medium text-gray-700 mb-2">BMI</h3>
          <div className="text-3xl font-bold text-blue-700">23.7</div>
          <p className="text-green-600 text-sm">Healthy range</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-5 flex flex-col items-center">
          <h3 className="font-medium text-gray-700 mb-2">Activity</h3>
          <div className="text-3xl font-bold text-green-700">86%</div>
          <p className="text-green-600 text-sm">Weekly goal</p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-5 flex flex-col items-center">
          <h3 className="font-medium text-gray-700 mb-2">Calories</h3>
          <div className="text-3xl font-bold text-orange-700">1,842</div>
          <p className="text-orange-600 text-sm">Daily intake</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">RECOMMENDATIONS & INSIGHTS</h2>
        
        <InsightsCard
          type="water"
          title="Water intake low"
          description="Keep a bottle nearby"
          actionText="Add Water"
          onAction={() => console.log('Water added')}
        />
        
        <InsightsCard
          type="workout"
          title="Great job!"
          description="Keep up the good work"
        />
        
        <InsightsCard
          type="sleep"
          title="Sleep duration low"
          description="Aim for at least 8 hours"
          actionText="Adjust Goal"
          onAction={() => navigate('/profile')}
        />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Today's Plan</h2>
          <button 
            onClick={() => navigate('/workout-planner')}
            className="text-blue-600 hover:text-blue-800"
          >
            View all
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">HIIT Workout</h3>
            <span className="text-gray-600">20 min</span>
          </div>
          <p className="text-gray-600 mb-4">3 exercises remaining</p>
          <div className="flex justify-end">
            <button 
              onClick={() => navigate('/workout-session/1')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Start Workout
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Meal Prep</h3>
            <span className="text-gray-600">30 min</span>
          </div>
          <p className="text-gray-600 mb-4">Prepare lunch for tomorrow</p>
          <div className="flex justify-end">
            <button 
              onClick={() => navigate('/nutrition')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              View Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;