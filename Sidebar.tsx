import React from 'react';
import { Home, Leaf, Bell, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
    { id: 'plants', label: 'My Plants', icon: Leaf, path: '/plants' },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <aside className="w-64 bg-white/80 backdrop-blur-sm border-r border-emerald-100 min-h-screen">
      <nav className="p-6">
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    active
                      ? 'bg-emerald-100 text-emerald-700 shadow-sm scale-105'
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-105'
                  }`}
                >
                  <Icon size={20} className={`${active ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-500'}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;