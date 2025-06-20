import React, { useState } from 'react';
import { User, Bell, Wifi, Database, Shield, Palette, Save } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    profile: {
      name: 'John Gardener',
      email: 'john@example.com',
      timezone: 'UTC-5',
      language: 'English',
    },
    notifications: {
      emailAlerts: true,
      pushNotifications: true,
      criticalAlerts: true,
      maintenanceReminders: true,
      weeklyReports: false,
    },
    system: {
      autoBackup: true,
      dataRetention: '90',
      updateFrequency: '5',
      temperatureUnit: 'celsius',
    },
    appearance: {
      theme: 'light',
      compactMode: false,
      showAnimations: true,
    },
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'system', label: 'System', icon: Database },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const handleSave = () => {
    // In a real app, this would save to backend
    alert('Settings saved successfully!');
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={settings.profile.name}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, name: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={settings.profile.email}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, email: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
          <select
            value={settings.profile.timezone}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, timezone: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="UTC-8">Pacific Time (UTC-8)</option>
            <option value="UTC-5">Eastern Time (UTC-5)</option>
            <option value="UTC+0">GMT (UTC+0)</option>
            <option value="UTC+1">Central European Time (UTC+1)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
          <select
            value={settings.profile.language}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, language: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      {Object.entries(settings.notifications).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-800 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <p className="text-sm text-gray-600">
              {key === 'emailAlerts' && 'Receive alerts via email'}
              {key === 'pushNotifications' && 'Browser push notifications'}
              {key === 'criticalAlerts' && 'Immediate alerts for critical issues'}
              {key === 'maintenanceReminders' && 'Scheduled maintenance notifications'}
              {key === 'weeklyReports' && 'Weekly summary reports'}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, [key]: e.target.checked }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention (days)</label>
          <input
            type="number"
            value={settings.system.dataRetention}
            onChange={(e) => setSettings({
              ...settings,
              system: { ...settings.system, dataRetention: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Update Frequency (minutes)</label>
          <input
            type="number"
            value={settings.system.updateFrequency}
            onChange={(e) => setSettings({
              ...settings,
              system: { ...settings.system, updateFrequency: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Temperature Unit</label>
          <select
            value={settings.system.temperatureUnit}
            onChange={(e) => setSettings({
              ...settings,
              system: { ...settings.system, temperatureUnit: e.target.value }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <h4 className="font-medium text-gray-800">Auto Backup</h4>
          <p className="text-sm text-gray-600">Automatically backup system data</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.system.autoBackup}
            onChange={(e) => setSettings({
              ...settings,
              system: { ...settings.system, autoBackup: e.target.checked }
            })}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
        </label>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Theme</label>
        <div className="grid grid-cols-2 gap-4">
          {['light', 'dark'].map((theme) => (
            <button
              key={theme}
              onClick={() => setSettings({
                ...settings,
                appearance: { ...settings.appearance, theme }
              })}
              className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                settings.appearance.theme === theme
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              <div className="font-medium text-gray-800 capitalize">{theme} Mode</div>
              <div className="text-sm text-gray-600 mt-1">
                {theme === 'light' ? 'Clean and bright interface' : 'Easy on the eyes'}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {Object.entries(settings.appearance).filter(([key]) => key !== 'theme').map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-800 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <p className="text-sm text-gray-600">
              {key === 'compactMode' && 'Reduce spacing and padding'}
              {key === 'showAnimations' && 'Enable smooth transitions and animations'}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value as boolean}
              onChange={(e) => setSettings({
                ...settings,
                appearance: { ...settings.appearance, [key]: e.target.checked }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Shield size={20} className="text-yellow-600" />
          <h4 className="font-medium text-yellow-800">Security Settings</h4>
        </div>
        <p className="text-sm text-yellow-700">
          These settings help protect your account and data. Changes require password confirmation.
        </p>
      </div>
      
      <div className="space-y-4">
        <button className="w-full p-4 bg-white border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
          <h4 className="font-medium text-gray-800">Change Password</h4>
          <p className="text-sm text-gray-600 mt-1">Update your account password</p>
        </button>
        
        <button className="w-full p-4 bg-white border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
          <h4 className="font-medium text-gray-800">Two-Factor Authentication</h4>
          <p className="text-sm text-gray-600 mt-1">Add an extra layer of security</p>
        </button>
        
        <button className="w-full p-4 bg-white border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors">
          <h4 className="font-medium text-gray-800">Active Sessions</h4>
          <p className="text-sm text-gray-600 mt-1">Manage your logged-in devices</p>
        </button>
        
        <button className="w-full p-4 bg-white border border-red-200 rounded-lg text-left hover:bg-red-50 transition-colors">
          <h4 className="font-medium text-red-800">Delete Account</h4>
          <p className="text-sm text-red-600 mt-1">Permanently delete your account and data</p>
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'system':
        return renderSystemSettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'security':
        return renderSecuritySettings();
      default:
        return renderProfileSettings();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Settings</h2>
          <p className="text-gray-600">Manage your account and system preferences</p>
        </div>
        
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200"
        >
          <Save size={18} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="flex gap-8">
        {/* Settings Navigation */}
        <div className="w-64 bg-white rounded-2xl border border-gray-200 p-6">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 capitalize">
              {activeTab} Settings
            </h3>
            <p className="text-gray-600 mt-1">
              {activeTab === 'profile' && 'Manage your personal information and preferences'}
              {activeTab === 'notifications' && 'Control how and when you receive notifications'}
              {activeTab === 'system' && 'Configure system behavior and data management'}
              {activeTab === 'appearance' && 'Customize the look and feel of your dashboard'}
              {activeTab === 'security' && 'Manage your account security and privacy'}
            </p>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;