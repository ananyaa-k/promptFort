import React, { useState } from 'react';
import { Bell, Search, User, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useAuth } from '../../contexts/AuthContext';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Security Alert',
    message: 'Unusual login activity detected from new location',
    time: '5 minutes ago',
    type: 'warning',
    read: false
  },
  {
    id: '2',
    title: 'Policy Updated',
    message: 'Data Privacy Policy has been updated to version 2.1',
    time: '1 hour ago',
    type: 'info',
    read: false
  },
  {
    id: '3',
    title: 'System Maintenance',
    message: 'Scheduled maintenance completed successfully',
    time: '2 hours ago',
    type: 'success',
    read: true
  },
  {
    id: '4',
    title: 'Usage Limit Warning',
    message: 'API usage approaching monthly limit (85% used)',
    time: '3 hours ago',
    type: 'warning',
    read: true
  },
  {
    id: '5',
    title: 'New User Added',
    message: 'Emma Davis has been added to the system',
    time: '1 day ago',
    type: 'info',
    read: true
  }
];

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'warning': return 'border-l-amber-500 bg-amber-50 dark:bg-amber-900/20';
      case 'error': return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'success': return 'border-l-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  return (
    <header className="floating-header bg-white/90 dark:bg-matte-black-95 backdrop-blur-xl border-b border-green-200/50 dark:border-white/10 px-6 py-4 sticky top-0 z-50 border-glow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold gradient-text-classy text-glow">
            PromptFort
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-white/60 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 bg-slate-50/80 dark:bg-black/80 backdrop-blur-sm border border-green-200/50 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-white/30 focus:border-transparent text-sm text-slate-900 dark:text-white floating-input border-glow"
            />
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-400 dark:text-white/70 hover:text-slate-600 dark:hover:text-white transition-colors floating-button"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium glow-red">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 max-h-96 overflow-y-auto floating-dropdown">
                <Card className="shadow-xl border-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-glow">
                      Notifications
                    </h3>
                    <div className="flex items-center space-x-2">
                      {unreadCount > 0 && (
                        <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                          Mark all read
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={() => setShowNotifications(false)}>
                        ✕
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        onClick={() => markAsRead(notification.id)}
                        className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all hover:shadow-md ${
                          getNotificationColor(notification.type)
                        } ${!notification.read ? 'ring-2 ring-green-200 dark:ring-white/20' : ''}`}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                                {notification.title}
                              </h4>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-green-500 dark:bg-white rounded-full glow-emerald"></div>
                              )}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-white/50 mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {notifications.length === 0 && (
                    <div className="text-center py-8">
                      <Bell className="w-12 h-12 text-slate-300 dark:text-white/30 mx-auto mb-3" />
                      <p className="text-slate-500 dark:text-white/50">No notifications</p>
                    </div>
                  )}
                </Card>
              </div>
            )}
          </div>

          <ThemeToggle />

          <div className="flex items-center space-x-3 pl-4 border-l border-green-200/50 dark:border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center glow-avatar">
                <User className="w-4 h-4 text-white dark:text-black" />
              </div>
              <div className="text-sm">
                <p className="font-medium text-slate-900 dark:text-white text-glow">{user?.name}</p>
                <p className="text-slate-500 dark:text-white/60">{user?.role}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={logout} className="floating-button">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};