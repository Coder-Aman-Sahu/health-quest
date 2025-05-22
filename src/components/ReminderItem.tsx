import React from 'react';
import { Droplet, Moon, Utensils, Pill } from 'lucide-react';

interface ReminderItemProps {
  id: number;
  type: 'Water' | 'Sleep' | 'Meals' | 'Supplements';
  status: 'pending' | 'done';
  message: string;
  onStatusChange: (id: number, status: string) => void;
  onDismiss: (id: number) => void;
}

const ReminderItem: React.FC<ReminderItemProps> = ({
  id,
  type,
  status,
  message,
  onStatusChange,
  onDismiss
}) => {
  const getIcon = () => {
    switch (type) {
      case 'Water': return <Droplet className="text-blue-500" size={20} />;
      case 'Sleep': return <Moon className="text-blue-500" size={20} />;
      case 'Meals': return <Utensils className="text-blue-500" size={20} />;
      case 'Supplements': return <Pill className="text-blue-500" size={20} />;
      default: return null;
    }
  };

  const getStatusColor = () => {
    return status === 'done' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white';
  };

  return (
    <div className="flex items-center py-3 border-b border-gray-200">
      <div className="flex-shrink-0 mr-3">
        {getIcon()}
      </div>
      
      <div className="flex-1">
        <div className="font-medium">{type}</div>
        <div className="text-sm text-gray-600">{message}</div>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor()}`}>
          {status === 'done' ? 'Done' : 'Pending'}
        </span>
        
        <button 
          onClick={() => onDismiss(id)}
          className="text-gray-500 hover:text-gray-700"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ReminderItem;