import React, { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "../dashboard/Dashboard";
import { PolicyManagement } from "../dashboard/PolicyManagement";
import { Analytics } from "../dashboard/Analytics";
import { Alerts } from "../dashboard/Alerts";
import { UserAccess } from "../dashboard/UserAccess";
import { About } from "../dashboard/About";
import { Settings } from "../dashboard/Settings";
import { AdminTestPrompt } from "../admin/AdminTestPrompt"; // ✅ Import test component

export const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Temporary hardcoded admin check for testing
  const isAdmin = true; // Replace with real auth role check later

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About onNavigate={setActiveTab} />;
      case "dashboard":
        return <Dashboard />;
      case "policies":
        return <PolicyManagement />;
      case "analytics":
        return <Analytics />;
      case "alerts":
        return <Alerts />;
      case "users":
        return <UserAccess />;
      case "settings":
        return <Settings />;
      case "admintest":
        return isAdmin ? <AdminTestPrompt /> : <About onNavigate={setActiveTab} />;
      default:
        return <About onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50/30 to-purple-50/30 dark:bg-black flex floating-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6 floating-main">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};
