import React, { useState } from 'react';
import { Eye, EyeOff, Bot } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useAuth } from '../../contexts/AuthContext';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:bg-black flex items-center justify-center p-4 floating-background">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-white dark:to-gray-200 rounded-xl mx-auto mb-4 glow-logo">
            <Bot className="w-8 h-8 text-white dark:text-black" />
          </div>
          <h1 className="text-2xl font-bold gradient-text-classy text-glow-strong mb-2">
            Welcome to PromptFort
          </h1>
          <p className="text-slate-600 dark:text-white/70 mt-2">
            Guardrails for Generative AI — Secure, Compliant, Accountable!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-green-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-white/30 focus:border-transparent bg-white dark:bg-black/50 text-slate-900 dark:text-white transition-colors floating-input border-glow"
              placeholder="admin@promptfort.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-white/80 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-green-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-white/30 focus:border-transparent bg-white dark:bg-black/50 text-slate-900 dark:text-white transition-colors floating-input border-glow"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-white/60 hover:text-slate-600 dark:hover:text-white/80"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading || !email || !password}
            className="w-full"
            size="lg"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600 dark:text-white/60">
            Demo credentials: admin@promptfort.com / admin123
          </p>
        </div>
      </Card>
    </div>
  );
};