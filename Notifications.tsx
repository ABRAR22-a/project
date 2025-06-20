import React, { useState } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, X, Filter } from 'lucide-react';

const Notifications: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Critical Water Level Alert',
      message: 'Spinach Bed water level has dropped to 25%. Immediate attention required.',
      time: '5 minutes ago',
      read: false,
      plant: 'Spinach Bed',
    },
    {
      id: 2,
      type: 'warning',
      icon: AlertTriangle,
      title: 'Temperature Warning',
      message: 'Cherry Tomatoes temperature is above optimal range (26.3°C).',
      time: '15 minutes ago',
      read: false,
      plant: 'Cherry Tomatoes',
    },
    {
      id: 3,
      type: 'info',
      icon: Info,
      title: 'Maintenance Reminder',
      message: 'Nutrient solution change scheduled for tomorrow.',
      time: '1 hour ago',
      read: true,
      plant: 'All Systems',
    },
    {
      id: 4,
      type: 'success',
      icon: CheckCircle,
      title: 'System Update Complete',
      message: 'All sensors have been successfully calibrated.',
      time: '2 hours ago',
      read: true,
      plant: 'System',
    },
    {
      id: 5,
      type: 'warning',
      icon: AlertTriangle,
      title: 'Low Humidity Alert',
      message: 'Basil Garden humidity has dropped to 58%. Consider increasing moisture.',
      time: '3 hours ago',
      read: true,
      plant: 'Basil Garden',
    },
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
      case 'success':
        return 'border-emerald-200 bg-emerald-50';
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
      case 'success':
        return 'text-emerald-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Notifications</h2>
          <p className="text-gray-600">Stay updated with your hydroponic systems</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200">
            Mark All Read
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Filter size={20} className="text-gray-600" />
          <span className="font-medium text-gray-800">Filter by:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All Notifications', count: notifications.length },
            { key: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
            { key: 'critical', label: 'Critical', count: notifications.filter(n => n.type === 'critical').length },
            { key: 'warning', label: 'Warnings', count: notifications.filter(n => n.type === 'warning').length },
            { key: 'info', label: 'Info', count: notifications.filter(n => n.type === 'info').length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === tab.key
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`bg-white rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${
                !notification.read ? 'border-emerald-200 shadow-sm' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${getNotificationColor(notification.type)}`}>
                    <Icon size={20} className={getIconColor(notification.type)} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{notification.message}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{notification.time}</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-medium">{notification.plant}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {notification.type === 'critical' && (
                    <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                      Take Action
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <Bell size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No notifications found</h3>
          <p className="text-gray-500">Try adjusting your filter settings</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;