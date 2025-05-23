import React from 'react';
import { Droplet, Dumbbell, Moon } from 'lucide-react';

interface InsightProps {
  type: 'water' | 'workout' | 'sleep';
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

const InsightsCard: React.FC<InsightProps> = ({ 
  type, 
  title, 
  description, 
  actionText,
  onAction 
}) => {
  const getBgColor = () => {
    switch (type) {
      case 'water': return 'bg-blue-50';
      case 'workout': return 'bg-green-50';
      case 'sleep': return 'bg-orange-50';
      default: return 'bg-gray-50';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'water': return <Droplet className="text-blue-500" size={28} />;
      case 'workout': return <Dumbbell className="text-green-500" size={28} />;
      case 'sleep': return <Moon className="text-orange-500" size={28} />;
      default: return null;
    }
  };

  const getButtonColor = () => {
    switch (type) {
      case 'water': return 'bg-blue-600 hover:bg-blue-700';
      case 'workout': return 'bg-green-600 hover:bg-green-700';
      case 'sleep': return 'bg-orange-600 hover:bg-orange-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className={`p-6 rounded-lg mb-4 transition-all ${getBgColor()}`}>
      <div className="flex items-start">
        {getIcon()}
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-700">{description}</p>
          
          {actionText && onAction && (
            <button
              onClick={onAction}
              className={`mt-4 px-6 py-2 rounded-md text-white font-medium ${getButtonColor()}`}
            >
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;