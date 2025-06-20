import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Thermometer, Wind, CheckCircle, AlertTriangle, XCircle, Eye } from 'lucide-react';

interface Plant {
  id: number;
  name: string;
  waterLevel: number;
  temperature: number;
  humidity: number;
  status: 'healthy' | 'warning' | 'critical';
  lastUpdated: string;
}

const PlantTable: React.FC = () => {
  const navigate = useNavigate();
  
  const plants: Plant[] = [
    { id: 1, name: 'Basil Garden', waterLevel: 85, temperature: 23.2, humidity: 68, status: 'healthy', lastUpdated: '2 mins ago' },
    { id: 2, name: 'Cherry Tomatoes', waterLevel: 72, temperature: 24.1, humidity: 70, status: 'healthy', lastUpdated: '5 mins ago' },
    { id: 3, name: 'Lettuce Patch', waterLevel: 45, temperature: 21.8, humidity: 62, status: 'warning', lastUpdated: '8 mins ago' },
    { id: 4, name: 'Mint Collection', waterLevel: 90, temperature: 22.5, humidity: 75, status: 'healthy', lastUpdated: '1 min ago' },
    { id: 5, name: 'Spinach Bed', waterLevel: 25, temperature: 26.3, humidity: 58, status: 'critical', lastUpdated: '12 mins ago' },
    { id: 6, name: 'Herb Garden', waterLevel: 78, temperature: 23.8, humidity: 72, status: 'healthy', lastUpdated: '3 mins ago' },
  ];

  const getStatusIcon = (status: Plant['status']) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle size={18} className="text-emerald-600" />;
      case 'warning':
        return <AlertTriangle size={18} className="text-yellow-600" />;
      case 'critical':
        return <XCircle size={18} className="text-red-600" />;
    }
  };

  const getStatusColor = (status: Plant['status']) => {
    switch (status) {
      case 'healthy':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'warning':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'critical':
        return 'text-red-700 bg-red-50 border-red-200';
    }
  };

  const getWaterLevelColor = (level: number) => {
    if (level >= 70) return 'text-emerald-600';
    if (level >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800">Plant Monitoring</h3>
        <p className="text-sm text-gray-600 mt-1">Real-time data from your hydroponic systems</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plant Name</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Water Level</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humidity</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {plants.map((plant) => (
              <tr key={plant.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{plant.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Droplets size={16} className={`mr-2 ${getWaterLevelColor(plant.waterLevel)}`} />
                    <span className={`text-sm font-medium ${getWaterLevelColor(plant.waterLevel)}`}>
                      {plant.waterLevel}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Thermometer size={16} className="mr-2 text-blue-600" />
                    <span className="text-sm text-gray-900">{plant.temperature}°C</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Wind size={16} className="mr-2 text-cyan-600" />
                    <span className="text-sm text-gray-900">{plant.humidity}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(plant.status)}`}>
                    {getStatusIcon(plant.status)}
                    <span className="ml-1 capitalize">{plant.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {plant.lastUpdated}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => navigate(`/plant/${plant.id}`)}
                    className="flex items-center space-x-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-all duration-200"
                  >
                    <Eye size={14} />
                    <span className="text-xs font-medium">View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantTable;