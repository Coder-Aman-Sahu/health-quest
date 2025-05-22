import React, { useState, useEffect } from 'react';
import ReminderItem from '../components/ReminderItem';

const Reminders: React.FC = () => {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  // For the settings view
  const [reminderSettings, setReminderSettings] = useState({
    water: true,
    meals: '9:00 AM',
    sleep: '12:00 PM',
    supplements: '10:30 PM'
  });
  
  useEffect(() => {
    // Fetch reminders - in a real app this would be an API call
    const fetchReminders = async () => {
      try {
        // Simulating API request
        setTimeout(() => {
          const mockReminders = [
            {
              id: 1,
              type: 'Water',
              status: 'pending',
              message: 'Keep a bottle nearby'
            },
            {
              id: 2,
              type: 'Meals',
              status: 'pending',
              message: 'Don\'t skip breakfast'
            },
            {
              id: 3,
              type: 'Sleep',
              status: 'done',
              message: 'Aim for at least 8 hours'
            },
            {
              id: 4,
              type: 'Supplements',
              status: 'pending',
              message: 'Take with dinner'
            }
          ];
          
          setReminders(mockReminders);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching reminders:', error);
        setLoading(false);
      }
    };
    
    fetchReminders();
  }, []);
  
  const handleStatusChange = (id: number, status: string) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id ? { ...reminder, status } : reminder
    ));
  };
  
  const handleDismiss = (id: number) => {
    // In a real app, this would update the server
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };
  
  const handleSettingsChange = (setting: string, value: any) => {
    setReminderSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };
  
  const handleSaveSettings = () => {
    // In a real app, this would save to the server
    setActiveTab('overview');
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'overview'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 border-b border-gray-200'
          }`}
        >
          Reminders Overview
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'settings'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 border-b border-gray-200'
          }`}
        >
          Reminder Settings
        </button>
      </div>
      
      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reminders...</p>
        </div>
      ) : activeTab === 'overview' ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex">
            <div className="flex-1 font-medium">Reminder</div>
            <div className="w-24 text-center font-medium">Status</div>
            <div className="w-20 text-center font-medium">Dismiss</div>
          </div>
          
          <div>
            {reminders.map((reminder) => (
              <ReminderItem
                key={reminder.id}
                id={reminder.id}
                type={reminder.type}
                status={reminder.status}
                message={reminder.message}
                onStatusChange={handleStatusChange}
                onDismiss={handleDismiss}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="mb-6 flex justify-between items-center">
            <div className="font-medium text-lg">Water</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={reminderSettings.water}
                onChange={(e) => handleSettingsChange('water', e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="mb-6 flex justify-between items-center">
            <div className="font-medium text-lg">Meals</div>
            <input
              type="time"
              className="px-3 py-2 border border-gray-300 rounded-md"
              value={reminderSettings.meals}
              onChange={(e) => handleSettingsChange('meals', e.target.value)}
            />
          </div>
          
          <div className="mb-6 flex justify-between items-center">
            <div className="font-medium text-lg">Sleep</div>
            <input
              type="time"
              className="px-3 py-2 border border-gray-300 rounded-md"
              value={reminderSettings.sleep}
              onChange={(e) => handleSettingsChange('sleep', e.target.value)}
            />
          </div>
          
          <div className="mb-6 flex justify-between items-center">
            <div className="font-medium text-lg">Supplements</div>
            <input
              type="time"
              className="px-3 py-2 border border-gray-300 rounded-md"
              value={reminderSettings.supplements}
              onChange={(e) => handleSettingsChange('supplements', e.target.value)}
            />
          </div>
          
          <button
            onClick={handleSaveSettings}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Reminders;