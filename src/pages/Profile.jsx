import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp } from 'lucide-react';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    goals: []
  });
  
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  useEffect(() => {
    // Fetch user profile - in a real app this would be an API call
    const fetchUserProfile = async () => {
      try {
        // Simulating API request
        setTimeout(() => {
          const savedUser = localStorage.getItem('healthquestUser');
          if (savedUser) {
            const { name } = JSON.parse(savedUser);
            
            const mockProfile = {
              name,
              age: '32',
              weight: '75',
              height: '178',
              goals: ['Lose weight', 'Build muscle', 'Improve cardio']
            };
            
            setProfile(mockProfile);
          }
          
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      // Simulating API request
      setTimeout(() => {
        // Update localStorage with new name
        const savedUser = localStorage.getItem('healthquestUser');
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          userData.name = profile.name;
          localStorage.setItem('healthquestUser', JSON.stringify(userData));
        }
        
        setSuccessMessage('Profile updated successfully');
        setIsSaving(false);
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }, 1000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      
      {successMessage && (
        <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
          {successMessage}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={profile.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="weight" className="block text-gray-700 font-medium mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={profile.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="height" className="block text-gray-700 font-medium mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={profile.height}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-md font-medium ${
                isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-bold">Health Metrics</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">BMI</div>
              <div className="text-2xl font-bold text-blue-700">23.7</div>
              <div className="text-green-600 text-sm">Healthy range</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">Body Fat</div>
              <div className="text-2xl font-bold text-green-700">18%</div>
              <div className="text-green-600 text-sm">Fitness level</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">Resting Heart Rate</div>
              <div className="text-2xl font-bold text-purple-700">68 bpm</div>
              <div className="text-green-600 text-sm">Good condition</div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-1">Avg. Sleep</div>
              <div className="text-2xl font-bold text-orange-700">7.2 hrs</div>
              <div className="text-orange-600 text-sm">Slightly below target</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-bold">Weight Progress</h2>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <TrendingUp size={24} className="text-green-500 mr-2" />
            <div>
              <div className="font-medium">On track with your goal</div>
              <div className="text-gray-600 text-sm">5kg lost in the last 3 months</div>
            </div>
          </div>
          
          <div className="h-48 flex items-end justify-between mb-2">
            <div className="flex flex-col items-center">
              <div className="w-10 bg-blue-500 rounded-t-md" style={{ height: '60%' }}></div>
              <div className="mt-2 text-xs text-gray-600">Jan</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 bg-blue-500 rounded-t-md" style={{ height: '70%' }}></div>
              <div className="mt-2 text-xs text-gray-600">Feb</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 bg-blue-500 rounded-t-md" style={{ height: '80%' }}></div>
              <div className="mt-2 text-xs text-gray-600">Mar</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 bg-blue-500 rounded-t-md" style={{ height: '85%' }}></div>
              <div className="mt-2 text-xs text-gray-600">Apr</div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            Weight progress over time (lower is better)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;