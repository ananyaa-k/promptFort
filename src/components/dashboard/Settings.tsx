import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Database, 
  Key, 
  Mail, 
  Smartphone,
  Save,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  Info
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useTheme } from '../../contexts/ThemeContext';

interface SettingsProps {
  onSave?: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onSave }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    alerts: true,
    reports: true,
    security: true
  });

  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    department: 'AI Operations',
    role: 'admin',
    phone: '+1 (555) 123-4567',
    timezone: 'UTC-8 (Pacific Time)',
    language: 'English'
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: '30',
    passwordExpiry: '90',
    loginNotifications: true
  });

  const settingSections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Database },
    { id: 'advanced', label: 'Advanced', icon: Key }
  ];

  const handleSave = () => {
    // Simulate save operation
    alert('Settings saved successfully!');
    onSave?.();
  };

  const handleExportSettings = () => {
    alert('Settings exported successfully!');
  };

  const handleImportSettings = () => {
    alert('Import settings functionality would open file dialog');
  };

  const handleResetSettings = () => {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      alert('Settings reset to default values');
    }
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-10 h-10 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {profile.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-400">{profile.role} • {profile.department}</p>
          <Button variant="ghost" size="sm" className="mt-2">
            Change Avatar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Department
          </label>
          <select
            value={profile.department}
            onChange={(e) => setProfile({...profile, department: e.target.value})}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            <option value="AI Operations">AI Operations</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Timezone
          </label>
          <select
            value={profile.timezone}
            onChange={(e) => setProfile({...profile, timezone: e.target.value})}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
            <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
            <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
            <option value="UTC+1 (CET)">UTC+1 (CET)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Language
          </label>
          <select
            value={profile.language}
            onChange={(e) => setProfile({...profile, language: e.target.value})}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
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

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="floating-card">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Email Notifications
          </h4>
          <div className="space-y-4">
            {Object.entries({
              alerts: 'Security Alerts',
              reports: 'Weekly Reports',
              security: 'Login Notifications'
            }).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">{label}</span>
                <button
                  onClick={() => setNotifications({...notifications, [key]: !notifications[key as keyof typeof notifications]})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications[key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications[key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="floating-card">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
            <Smartphone className="w-5 h-5 mr-2" />
            Push Notifications
          </h4>
          <div className="space-y-4">
            {Object.entries({
              push: 'Browser Push',
              sms: 'SMS Alerts'
            }).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">{label}</span>
                <button
                  onClick={() => setNotifications({...notifications, [key]: !notifications[key as keyof typeof notifications]})}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications[key as keyof typeof notifications] ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications[key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      <Card className="floating-card">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Security Settings
        </h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Two-Factor Authentication</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Add an extra layer of security</p>
            </div>
            <button
              onClick={() => setSecurity({...security, twoFactor: !security.twoFactor})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                security.twoFactor ? 'bg-green-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  security.twoFactor ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Session Timeout (minutes)
            </label>
            <select
              value={security.sessionTimeout}
              onChange={(e) => setSecurity({...security, sessionTimeout: e.target.value})}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Password Change
            </label>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Current password"
                  className="w-full px-4 py-3 pr-12 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              />
              <Button variant="secondary" size="sm">
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderAppearanceSection = () => (
    <div className="space-y-6">
      <Card className="floating-card">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2" />
          Theme & Display
        </h4>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              Theme Preference
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => theme === 'dark' && toggleTheme()}
                className={`p-4 rounded-lg border-2 transition-all ${
                  theme === 'light' 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-slate-300 dark:border-slate-600 hover:border-slate-400'
                }`}
              >
                <div className="w-full h-20 bg-white rounded-lg mb-2 border border-slate-200"></div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Light Mode</p>
              </button>
              <button
                onClick={() => theme === 'light' && toggleTheme()}
                className={`p-4 rounded-lg border-2 transition-all ${
                  theme === 'dark' 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-slate-300 dark:border-slate-600 hover:border-slate-400'
                }`}
              >
                <div className="w-full h-20 bg-slate-800 rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Dark Mode</p>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Sidebar Density
            </label>
            <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
              <option value="comfortable">Comfortable</option>
              <option value="compact">Compact</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile': return renderProfileSection();
      case 'notifications': return renderNotificationsSection();
      case 'security': return renderSecuritySection();
      case 'appearance': return renderAppearanceSection();
      case 'integrations':
        return (
          <Card className="floating-card text-center py-12">
            <Database className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Integrations
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Connect with external services and APIs
            </p>
          </Card>
        );
      case 'advanced':
        return (
          <Card className="floating-card text-center py-12">
            <Key className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Advanced Settings
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Advanced configuration options
            </p>
          </Card>
        );
      default: return renderProfileSection();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Settings
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Manage your account preferences and system configuration
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="secondary" onClick={handleImportSettings} className="flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </Button>
          <Button variant="secondary" onClick={handleExportSettings} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
          <Button variant="danger" onClick={handleResetSettings} className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Reset</span>
          </Button>
          <Button onClick={handleSave} className="flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="floating-card lg:col-span-1">
          <nav className="space-y-2">
            {settingSections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};