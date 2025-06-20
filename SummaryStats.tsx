import React from 'react';
import { Thermometer, Droplets, Activity, CheckCircle } from 'lucide-react';

const SummaryStats: React.FC = () => {
  const stats = [
    {
      label: 'Overall Status',
      value: 'All Plants Healthy',
      icon: CheckCircle,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      label: 'Avg Temperature',
      value: '22.5°C',
      icon: Thermometer,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      label: 'Avg Humidity',
      value: '65%',
      icon: Droplets,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
    },
    {
      label: 'Active Plants',
      value: '12 of 15',
      icon: Activity,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 border-2 ${stat.borderColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={24} className={stat.color} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryStats;