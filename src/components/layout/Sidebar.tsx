import React from "react";
import {
  LayoutDashboard,
  Shield,
  BarChart3,
  AlertTriangle,
  Users,
  Settings,
  Bot,
  Info,
  TestTube2, // icon for admin test tab
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: "about", label: "About", icon: Info },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "policies", label: "Policy Management", icon: Shield },
  { id: "analytics", label: "Analytics & Reports", icon: BarChart3 },
  { id: "alerts", label: "Alerts & Incidents", icon: AlertTriangle },
  { id: "users", label: "User Access", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const isAdmin = true; // replace with real role logic later

  return (
    <div className="w-64 floating-sidebar bg-white/90 dark:bg-matte-black-95 backdrop-blur-xl border-r border-green-200/50 dark:border-white/10 flex flex-col border-glow">
      <div className="p-6 border-b border-green-200/50 dark:border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-white dark:to-gray-200 rounded-xl flex items-center justify-center glow-logo">
            <Bot className="w-6 h-6 text-white dark:text-black" />
          </div>
          <div>
            <h2 className="text-lg font-bold gradient-text-classy text-glow">PromptFort</h2>
            <p className="text-sm text-slate-500 dark:text-white/60">AI Guardrails</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 floating-nav-item ${
                    isActive
                      ? "bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-white/10 dark:via-white/5 dark:to-white/10 text-green-600 dark:text-white border border-green-200/50 dark:border-white/20 glow-active text-glow"
                      : "text-slate-600 dark:text-white/70 hover:bg-slate-50/80 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}

          {isAdmin && (
            <li>
              <button
                onClick={() => onTabChange("admintest")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 floating-nav-item ${
                  activeTab === "admintest"
                    ? "bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-white/10 dark:via-white/5 dark:to-white/10 text-green-600 dark:text-white border border-green-200/50 dark:border-white/20 glow-active text-glow"
                    : "text-slate-600 dark:text-white/70 hover:bg-slate-50/80 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <TestTube2 className="w-5 h-5" />
                <span className="font-medium">Admin Test</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
