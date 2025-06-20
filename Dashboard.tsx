import React from 'react';
import SummaryStats from '../components/SummaryStats';
import PlantTable from '../components/PlantTable';
import AlertsPanel from '../components/AlertsPanel';
import QuickActions from '../components/QuickActions';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Monitor and manage your hydroponic garden systems</p>
      </div>
      
      {/* Summary Statistics */}
      <SummaryStats />
      
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Main Content Area */}
      <div className="flex gap-8">
        <div className="flex-1">
          <PlantTable />
        </div>
        
        {/* Right Panel */}
        <AlertsPanel />
      </div>
    </div>
  );
};

export default Dashboard;