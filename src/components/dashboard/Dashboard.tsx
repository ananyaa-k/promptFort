import React from 'react';
import { TrendingUp, Shield, AlertTriangle, Users, Activity, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';

const metrics = [
  {
    title: 'Total Requests',
    value: '2.4M',
    change: '+12.5%',
    trend: 'up',
    icon: Activity,
    color: 'blue'
  },
  {
    title: 'Active Policies',
    value: '47',
    change: '+3',
    trend: 'up',
    icon: Shield,
    color: 'green'
  },
  {
    title: 'Open Alerts',
    value: '8',
    change: '-2',
    trend: 'down',
    icon: AlertTriangle,
    color: 'orange'
  },
  {
    title: 'Active Users',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'purple'
  }
];

const recentActivities = [
  {
    id: 1,
    type: 'policy',
    message: 'Data Privacy Policy updated',
    time: '5 minutes ago',
    user: 'Sarah Chen'
  },
  {
    id: 2,
    type: 'alert',
    message: 'Security alert resolved',
    time: '12 minutes ago',
    user: 'Mike Johnson'
  },
  {
    id: 3,
    type: 'user',
    message: 'New user added to system',
    time: '25 minutes ago',
    user: 'Admin'
  },
  {
    id: 4,
    type: 'compliance',
    message: 'Compliance check passed',
    time: '1 hour ago',
    user: 'System'
  }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Welcome Back
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Here's an overview of your AI governance platform
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const colorClasses = {
            blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20',
            green: 'text-green-600 bg-green-100 dark:bg-green-900/20',
            orange: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20',
            purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20'
          };

          return (
            <Card key={metric.title}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {metric.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {metric.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-slate-900 dark:text-slate-100">
                    {activity.message}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {activity.time} • {activity.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* System Health */}
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            System Health
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">
                API Performance
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <span className="text-sm font-medium text-green-600">94%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Compliance Score
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <span className="text-sm font-medium text-blue-600">98%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Security Status
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-sm font-medium text-green-600">100%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};