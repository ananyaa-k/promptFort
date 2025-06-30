import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed floating-button';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white focus:ring-green-500 dark:from-white dark:to-gray-100 dark:hover:from-gray-100 dark:hover:to-white dark:text-black glow-primary',
    secondary: 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-900 focus:ring-slate-500 dark:bg-black/80 dark:hover:bg-black/90 dark:text-white dark:border dark:border-white/20 backdrop-blur-sm border-glow',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white focus:ring-red-500 dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 glow-danger',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 focus:ring-slate-500 dark:text-white dark:hover:text-white dark:hover:bg-white/10 backdrop-blur-sm'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};