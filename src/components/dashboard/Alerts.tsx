import React, { useState } from 'react';
import { AlertTriangle, Clock, User, Filter, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Alert } from '../../types';

const mockAlerts: Alert[] = [
  {
    id: '1',
    title: 'High API Usage Detected',
    description: 'Unusual spike in API requests from Engineering department (300% above normal)',
    severity: 'high',
    category: 'usage',
    status: 'open',
    createdAt: '2024-01-18T14:30:00Z',
    assignedTo: 'Sarah Chen'
  },
  {
    id: '2',
    title: 'Security Policy Violation',
    description: 'Attempt to access restricted model without proper authorization',
    severity: 'critical',
    category: 'security',
    status: 'investigating',
    createdAt: '2024-01-18T13:45:00Z',
    assignedTo: 'Mike Johnson'
  },
  {
    id: '3',
    title: 'Model Performance Degradation',
    description: 'Response times for GPT-4 model increased by 40% in the last hour',
    severity: 'medium',
    category: 'performance',
    status: 'open',
    createdAt: '2024-01-18T12:15:00Z'
  },
  {
    id: '4',
    title: 'Compliance Check Failed',
    description: 'Data retention policy violation detected in model training pipeline',
    severity: 'high',
    category: 'compliance',
    status: 'resolved',
    createdAt: '2024-01-18T10:20:00Z',
    assignedTo: 'Lisa Wang'
  },
  {
    id: '5',
    title: 'Token Limit Exceeded',
    description: 'User exceeded monthly token allocation by 25%',
    severity: 'low',
    category: 'usage',
    status: 'open',
    createdAt: '2024-01-18T09:30:00Z'
  }
];

export const Alerts: React.FC = () => {
  const [alerts] = useState<Alert[]>(mockAlerts);
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredAlerts = alerts.filter(alert => {
    const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
    const matchesStatus = filterStatus === 'all' || alert.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || alert.category === filterCategory;
    
    return matchesSeverity && matchesStatus && matchesCategory;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'investigating': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return AlertTriangle;
      case 'performance': return Clock;
      case 'usage': return User;
      case 'compliance': return CheckCircle;
      default: return AlertTriangle;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    
    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Alerts & Incidents
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Monitor and manage system alerts and security incidents
        </p>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card padding="sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {alerts.filter(a => a.status === 'open').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Open</p>
            </div>
          </div>
        </Card>

        <Card padding="sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {alerts.filter(a => a.status === 'investigating').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Investigating</p>
            </div>
          </div>
        </Card>

        <Card padding="sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {alerts.filter(a => a.status === 'resolved').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Resolved</p>
            </div>
          </div>
        </Card>

        <Card padding="sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {alerts.filter(a => a.severity === 'critical').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Critical</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Filters:
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="all">All Statuses</option>
              <option value="open">Open</option>
              <option value="investigating">Investigating</option>
              <option value="resolved">Resolved</option>
            </select>
            
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="all">All Categories</option>
              <option value="security">Security</option>
              <option value="performance">Performance</option>
              <option value="usage">Usage</option>
              <option value="compliance">Compliance</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => {
          const CategoryIcon = getCategoryIcon(alert.category);
          
          return (
            <Card key={alert.id} className="hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <CategoryIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {alert.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {alert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                      <span>{formatDate(alert.createdAt)}</span>
                      {alert.assignedTo && (
                        <span>Assigned to {alert.assignedTo}</span>
                      )}
                      <span className="capitalize">{alert.category}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {alert.status === 'open' && (
                        <Button size="sm" variant="primary">
                          Investigate
                        </Button>
                      )}
                      {alert.status === 'investigating' && (
                        <Button size="sm" variant="secondary">
                          Resolve
                        </Button>
                      )}
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredAlerts.length === 0 && (
        <Card className="text-center py-12">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
            No alerts found
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            No alerts match your current filter criteria
          </p>
        </Card>
      )}
    </div>
  );
};