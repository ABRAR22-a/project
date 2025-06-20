import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Lightbulb, Droplets, Thermometer, Bell } from 'lucide-react';

const AlertsPanel: React.FC = () => {
  const navigate = useNavigate();
  
  const alerts = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Low Water Level',
      message: 'Spinach Bed water level is critically low (25%)',
      time: '5 mins ago',
      action: 'Refill Tank',
    },
    {
      id: 2,
      type: 'warning',
      icon: Droplets,
      title: 'Water Level Warning',
      message: 'Lettuce Patch needs water refill soon (45%)',
      time: '15 mins ago',
      action: 'Monitor',
    },
    {
      id: 3,
      type: 'info',
      icon: Thermometer,
      title: 'Temperature Alert',
      message: 'Spinach Bed temperature is above optimal range',
      time: '1 hour ago',
      action: 'Check Ventilation',
    },
  ];

  const suggestions = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Optimize Growth',
      message: 'Consider increasing humidity for Cherry Tomatoes by 5%',
      priority: 'low',
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Maintenance Reminder',
      message: 'Schedule nutrient solution change for next week',
      priority: 'medium',
    },
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-600';
      case 'warning':
        return 'text-yellow-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="w-80 bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Alerts & Suggestions</h3>
        <button
          onClick={() => navigate('/notifications')}
          className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
        >
          <Bell size={18} />
        </button>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Alerts Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Alerts</h4>
          <div className="space-y-3">
            {alerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl border-2 ${getAlertColor(alert.type)} hover:shadow-sm transition-all duration-200 cursor-pointer`}
                  onClick={() => navigate('/notifications')}
                >
                  <div className="flex items-start space-x-3">
                    <Icon size={18} className={getIconColor(alert.type)} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 mb-1">{alert.title}</p>
                      <p className="text-xs text-gray-600 mb-2">{alert.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{alert.time}</span>
                        <span className="text-xs font-medium text-emerald-600 cursor-pointer hover:text-emerald-700">
                          {alert.action}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Suggestions Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Smart Suggestions</h4>
          <div className="space-y-3">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon;
              return (
                <div
                  key={suggestion.id}
                  className="p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50 hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <Icon size={18} className="text-emerald-600" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 mb-1">{suggestion.title}</p>
                      <p className="text-xs text-gray-600">{suggestion.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;