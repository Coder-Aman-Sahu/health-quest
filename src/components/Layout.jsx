import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Dumbbell, 
  Apple, 
  Bell, 
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const navigationItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Dumbbell size={24} />, label: 'Workouts', path: '/workout-planner' },
    { icon: <Apple size={24} />, label: 'Nutrition', path: '/nutrition' },
    { icon: <Bell size={24} />, label: 'Reminders', path: '/reminders' },
    { icon: <User size={24} />, label: 'Profile', path: '/profile' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900">HEALTHQUEST</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut size={20} className="mr-1" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      <nav className="bg-white shadow-lg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center py-3 px-2 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;