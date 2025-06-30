import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Activity, DollarSign, Download, Calendar, Filter, RefreshCw } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const usageData = [
  { name: 'Jan', requests: 4000, tokens: 240000, cost: 1200 },
  { name: 'Feb', requests: 3000, tokens: 180000, cost: 900 },
  { name: 'Mar', requests: 5000, tokens: 300000, cost: 1500 },
  { name: 'Apr', requests: 4500, tokens: 270000, cost: 1350 },
  { name: 'May', requests: 6000, tokens: 360000, cost: 1800 },
  { name: 'Jun', requests: 5500, tokens: 330000, cost: 1650 }
];

const modelUsageData = [
  { name: 'GPT-4', value: 45, color: '#3B82F6' },
  { name: 'Claude', value: 25, color: '#10B981' },
  { name: 'LLaMA', value: 20, color: '#F59E0B' },
  { name: 'Other', value: 10, color: '#8B5CF6' }
];

const departmentData = [
  { name: 'Engineering', requests: 8500 },
  { name: 'Marketing', requests: 4200 },
  { name: 'Sales', requests: 3800 },
  { name: 'Support', requests: 2100 },
];

export const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('last-30-days');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleExportReport = () => {
    alert('Export Report functionality would generate and download a comprehensive analytics report');
  };

  const handleRefreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
    alert('Data refreshed successfully!');
  };

  const handleScheduleReport = () => {
    alert('Schedule Report functionality would open a dialog to set up automated reports');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Analytics & Reports
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Comprehensive insights into AI usage and performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="last-7-days">Last 7 days</option>
              <option value="last-30-days">Last 30 days</option>
              <option value="last-90-days">Last 90 days</option>
              <option value="last-year">Last year</option>
            </select>
          </div>
          <Button 
            variant="secondary" 
            onClick={handleRefreshData}
            disabled={isRefreshing}
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </Button>
          <Button variant="secondary" onClick={handleScheduleReport} className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Schedule</span>
          </Button>
          <Button onClick={handleExportReport} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Requests
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                28.4K
              </p>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Active Users
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                1,247
              </p>
              <p className="text-sm text-green-600 mt-1">+8.2% from last month</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Cost
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                $8,397
              </p>
              <p className="text-sm text-orange-600 mt-1">+15.3% from last month</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Avg Response Time
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                1.24s
              </p>
              <p className="text-sm text-green-600 mt-1">-5.2% from last month</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Usage Trends
            </h3>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="requests" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Model Usage
            </h3>
            <Button variant="ghost" size="sm">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={modelUsageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {modelUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Department Usage
            </h3>
            <Button variant="ghost" size="sm">
              <TrendingUp className="w-4 h-4" />
            </Button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="requests" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Cost Breakdown
            </h3>
            <Button variant="ghost" size="sm">
              <DollarSign className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer">
              <span className="text-slate-600 dark:text-slate-400">Compute Costs</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">$5,240</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer">
              <span className="text-slate-600 dark:text-slate-400">Storage Costs</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">$1,847</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer">
              <span className="text-slate-600 dark:text-slate-400">API Costs</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">$1,310</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <span className="font-semibold text-slate-900 dark:text-slate-100">Total</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">$8,397</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};