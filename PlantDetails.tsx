import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplets, Thermometer, Wind, Calendar, TrendingUp, Settings } from 'lucide-react';

const PlantDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock plant data - in real app this would come from API
  const plant = {
    id: parseInt(id || '1'),
    name: 'Basil Garden',
    type: 'Herbs',
    plantedDate: '2024-01-15',
    waterLevel: 85,
    temperature: 23.2,
    humidity: 68,
    status: 'healthy' as const,
    lastUpdated: '2 mins ago',
    growthStage: 'Mature',
    expectedHarvest: '2024-02-15',
  };

  const metrics = [
    { label: 'Water Level', value: `${plant.waterLevel}%`, icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Temperature', value: `${plant.temperature}°C`, icon: Thermometer, color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Humidity', value: `${plant.humidity}%`, icon: Wind, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];

  const recentReadings = [
    { time: '10:00 AM', water: 87, temp: 23.1, humidity: 69 },
    { time: '11:00 AM', water: 86, temp: 23.3, humidity: 68 },
    { time: '12:00 PM', water: 85, temp: 23.2, humidity: 68 },
    { time: '1:00 PM', water: 84, temp: 23.4, humidity: 67 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{plant.name}</h2>
            <p className="text-gray-600">{plant.type} • {plant.growthStage}</p>
          </div>
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200">
          <Settings size={18} />
          <span>Configure</span>
        </button>
      </div>

      {/* Plant Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">{metric.label}</p>
                  <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                </div>
                <div className={`${metric.bg} p-3 rounded-xl`}>
                  <Icon size={24} className={metric.color} />
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Next Harvest</p>
              <p className="text-2xl font-bold text-emerald-600">12 days</p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl">
              <Calendar size={24} className="text-emerald-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Readings */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Recent Readings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentReadings.map((reading, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">{reading.time}</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-blue-600">💧 {reading.water}%</span>
                    <span className="text-red-600">🌡️ {reading.temp}°C</span>
                    <span className="text-cyan-600">💨 {reading.humidity}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plant Care Schedule */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Care Schedule</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div>
                  <p className="font-medium text-gray-800">Nutrient Change</p>
                  <p className="text-sm text-gray-600">Due in 3 days</p>
                </div>
                <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors">
                  Schedule
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div>
                  <p className="font-medium text-gray-800">pH Check</p>
                  <p className="text-sm text-gray-600">Due tomorrow</p>
                </div>
                <button className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition-colors">
                  Remind
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">System Clean</p>
                  <p className="text-sm text-gray-600">Due in 1 week</p>
                </div>
                <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                  Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Timeline */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">Growth Timeline</h3>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-emerald-600 rounded-full mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Planted</p>
              <p className="text-xs text-gray-600">Jan 15</p>
            </div>
            <div className="flex-1 h-0.5 bg-emerald-600"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-emerald-600 rounded-full mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Sprouted</p>
              <p className="text-xs text-gray-600">Jan 22</p>
            </div>
            <div className="flex-1 h-0.5 bg-emerald-600"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-emerald-600 rounded-full mb-2"></div>
              <p className="text-sm font-medium text-gray-800">Mature</p>
              <p className="text-xs text-gray-600">Feb 5</p>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-full mb-2"></div>
              <p className="text-sm font-medium text-gray-400">Harvest</p>
              <p className="text-xs text-gray-400">Feb 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;