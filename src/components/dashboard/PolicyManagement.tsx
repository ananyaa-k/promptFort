import React, { useState } from 'react';
import { Plus, Search, Filter, Edit3, Trash2, Eye, Shield, Download, Upload, Copy } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Policy } from '../../types';

const mockPolicies: Policy[] = [
  {
    id: '1',
    name: 'Data Privacy Protection',
    description: 'Comprehensive policy for handling sensitive data in AI models',
    category: 'data-governance',
    status: 'active',
    createdBy: 'Sarah Chen',
    createdAt: '2024-01-15',
    lastModified: '2024-01-18',
    version: '2.1'
  },
  {
    id: '2',
    name: 'Model Deployment Standards',
    description: 'Guidelines for deploying AI models to production environments',
    category: 'model-deployment',
    status: 'active',
    createdBy: 'Mike Johnson',
    createdAt: '2024-01-10',
    lastModified: '2024-01-16',
    version: '1.5'
  },
  {
    id: '3',
    name: 'Ethical AI Guidelines',
    description: 'Framework for ensuring ethical use of artificial intelligence',
    category: 'ethics',
    status: 'draft',
    createdBy: 'Lisa Wang',
    createdAt: '2024-01-12',
    lastModified: '2024-01-17',
    version: '1.0'
  },
  {
    id: '4',
    name: 'Compliance Monitoring',
    description: 'Procedures for monitoring and ensuring regulatory compliance',
    category: 'compliance',
    status: 'active',
    createdBy: 'David Brown',
    createdAt: '2024-01-08',
    lastModified: '2024-01-14',
    version: '3.2'
  }
];

export const PolicyManagement: React.FC = () => {
  const [policies] = useState<Policy[]>(mockPolicies);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredPolicies = policies.filter(policy => {
    const matchesSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || policy.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || policy.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'archived': return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data-governance': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'model-deployment': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'ethics': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400';
      case 'compliance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const handleCreatePolicy = () => {
    alert('Create Policy functionality would open a policy creation wizard');
  };

  const handleImportPolicy = () => {
    alert('Import Policy functionality would open a file upload dialog');
  };

  const handleExportPolicies = () => {
    alert('Export Policies functionality would download policies as JSON/CSV');
  };

  const handleViewPolicy = (policyId: string) => {
    alert(`View Policy ${policyId} functionality would open policy details`);
  };

  const handleEditPolicy = (policyId: string) => {
    alert(`Edit Policy ${policyId} functionality would open policy editor`);
  };

  const handleDuplicatePolicy = (policyId: string) => {
    alert(`Duplicate Policy ${policyId} functionality would create a copy`);
  };

  const handleDeletePolicy = (policyId: string) => {
    if (confirm('Are you sure you want to delete this policy?')) {
      alert(`Delete Policy ${policyId} functionality would remove the policy`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Policy Management
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Create and manage governance policies for AI systems
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="secondary" onClick={handleImportPolicy} className="flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </Button>
          <Button variant="secondary" onClick={handleExportPolicies} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
          <Button onClick={handleCreatePolicy} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create New Policy</span>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search policies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-slate-100"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
              >
                <option value="all">All Categories</option>
                <option value="data-governance">Data Governance</option>
                <option value="model-deployment">Model Deployment</option>
                <option value="ethics">Ethics</option>
                <option value="compliance">Compliance</option>
              </select>
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Policy List */}
      <div className="grid gap-4">
        {filteredPolicies.map((policy) => (
          <Card key={policy.id} className="hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {policy.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(policy.status)}`}>
                        {policy.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(policy.category)}`}>
                        {policy.category.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {policy.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
                      <span>Version {policy.version}</span>
                      <span>Created by {policy.createdBy}</span>
                      <span>Last modified {policy.lastModified}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => handleViewPolicy(policy.id)}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleEditPolicy(policy.id)}>
                  <Edit3 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDuplicatePolicy(policy.id)}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeletePolicy(policy.id)}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPolicies.length === 0 && (
        <Card className="text-center py-12">
          <Shield className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
            No policies found
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            No policies match your current search and filter criteria
          </p>
        </Card>
      )}
    </div>
  );
};