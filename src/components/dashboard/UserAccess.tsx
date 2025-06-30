import React, { useState } from 'react';
import { Plus, Search, Filter, Edit3, Trash2, Shield, UserCheck, UserX, Mail, Key, Download } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { User } from '../../types';

const mockUsers: User[] = [
  {
    id: '1',
    email: 'sarah.chen@company.com',
    name: 'Sarah Chen',
    role: 'admin',
    department: 'AI Operations',
    lastLogin: '2024-01-18T10:30:00Z',
    status: 'active'
  },
  {
    id: '2',
    email: 'mike.johnson@company.com',
    name: 'Mike Johnson',
    role: 'manager',
    department: 'Engineering',
    lastLogin: '2024-01-18T09:15:00Z',
    status: 'active'
  },
  {
    id: '3',
    email: 'lisa.wang@company.com',
    name: 'Lisa Wang',
    role: 'user',
    department: 'Marketing',
    lastLogin: '2024-01-17T16:45:00Z',
    status: 'active'
  },
  {
    id: '4',
    email: 'david.brown@company.com',
    name: 'David Brown',
    role: 'manager',
    department: 'Sales',
    lastLogin: '2024-01-16T14:20:00Z',
    status: 'inactive'
  },
  {
    id: '5',
    email: 'emma.davis@company.com',
    name: 'Emma Davis',
    role: 'user',
    department: 'Support',
    lastLogin: '2024-01-18T08:30:00Z',
    status: 'active'
  }
];

export const UserAccess: React.FC = () => {
  const [users] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesDepartment = filterDepartment === 'all' || user.department === filterDepartment;
    
    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'manager': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'user': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'inactive': return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const formatLastLogin = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  };

  const departments = Array.from(new Set(users.map(user => user.department)));

  const handleAddUser = () => {
    alert('Add User functionality would open a user creation form');
  };

  const handleEditUser = (userId: string) => {
    alert(`Edit User ${userId} functionality would open user edit form`);
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      alert(`Delete User ${userId} functionality would remove the user`);
    }
  };

  const handleInviteUser = () => {
    alert('Invite User functionality would open an invitation dialog');
  };

  const handleExportUsers = () => {
    alert('Export Users functionality would download user list as CSV');
  };

  const handleResetPassword = (userId: string) => {
    alert(`Reset Password for User ${userId} functionality would send password reset email`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            User Access Management
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Manage user permissions and access controls
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="secondary" onClick={handleInviteUser} className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>Invite</span>
          </Button>
          <Button variant="secondary" onClick={handleExportUsers} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
          <Button onClick={handleAddUser} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add User</span>
          </Button>
        </div>
      </div>

      {/* User Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card padding="sm" className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {users.filter(u => u.role === 'admin').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Admins</p>
            </div>
          </div>
        </Card>

        <Card padding="sm" className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <UserCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {users.filter(u => u.role === 'manager').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Managers</p>
            </div>
          </div>
        </Card>

        <Card padding="sm" className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <UserCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {users.filter(u => u.status === 'active').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Active</p>
            </div>
          </div>
        </Card>

        <Card padding="sm" className="hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
              <UserX className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {users.filter(u => u.status === 'inactive').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Inactive</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 dark:text-slate-100"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="user">User</option>
              </select>
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                  Name
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                  Role
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                  Department
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                  Last Login
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100">
                        {user.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {user.email}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-900 dark:text-slate-100">
                    {user.department}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-400">
                    {formatLastLogin(user.lastLogin)}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditUser(user.id)}>
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleResetPassword(user.id)}>
                        <Key className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {filteredUsers.length === 0 && (
        <Card className="text-center py-12">
          <UserX className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
            No users found
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            No users match your current search and filter criteria
          </p>
        </Card>
      )}
    </div>
  );
};