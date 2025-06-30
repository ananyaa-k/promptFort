export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
  department: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

export interface Policy {
  id: string;
  name: string;
  description: string;
  category: 'data-governance' | 'model-deployment' | 'ethics' | 'compliance';
  status: 'active' | 'draft' | 'archived';
  createdBy: string;
  createdAt: string;
  lastModified: string;
  version: string;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: 'security' | 'performance' | 'compliance' | 'usage';
  status: 'open' | 'investigating' | 'resolved';
  createdAt: string;
  assignedTo?: string;
}

export interface UsageMetric {
  date: string;
  requests: number;
  tokens: number;
  cost: number;
  models: string[];
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}