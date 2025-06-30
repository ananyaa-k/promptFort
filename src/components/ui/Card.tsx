import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'md' 
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`floating-card bg-white/90 dark:bg-matte-black-95 backdrop-blur-xl rounded-xl shadow-lg border border-green-200/50 dark:border-white/10 border-glow ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};