import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: User = {
  id: '1',
  email: 'admin@genai-governance.com',
  name: 'Sarah Chen',
  role: 'admin',
  department: 'AI Operations',
  lastLogin: '2025-01-18T10:30:00Z',
  status: 'active'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
    // Mock authentication - in production this would call your API
    if (email && password) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(mockUser);
      localStorage.setItem('auth-token', 'mock-jwt-token-' + Date.now());
    } else {
      throw new Error('{{auth.invalid_credentials}}');
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('auth-token');
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};