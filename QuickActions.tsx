import React from 'react';
import { Plus, RefreshCw, Settings, Download } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Plus,
      label: 'Add New Plant',
      description: 'Set up monitoring for a new hydroponic system',
      color: 'bg-emerald-600 hover:bg-emerald-700',
      onClick: () => alert('Add New Plant functionality would be implemented here'),
    },
    {
      icon: RefreshCw,
      label: 'Sync All Data',
      description: 'Refresh data from all connected sensors',
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => alert('Data sync initiated'),
    },
    {
      icon: Settings,
      label: 'System Settings',
      description: 'Configure monitoring parameters and alerts',
      color: 'bg-gray-600 hover:bg-gray-700',
      onClick: () => window.location.href = '/settings',
    },
    {
      icon: Download,
      label: 'Export Data',
      description: 'Download historical data and reports',
      color: 'bg-purple-600 hover:bg-purple-700',
      onClick: () => alert('Data export would be implemented here'),
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.onClick}
              className={`p-4 rounded-xl text-white transition-all duration-200 hover:scale-105 hover:shadow-lg ${action.color}`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <Icon size={24} />
                <div>
                  <p className="font-medium text-sm">{action.label}</p>
                  <p className="text-xs opacity-90 mt-1">{action.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;