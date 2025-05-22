import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

interface DarkModeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button' | 'switch';
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'icon'
}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5'
  };

  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 24
  };

  if (variant === 'switch') {
    return (
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
          isDarkMode ? 'bg-emerald-600' : 'bg-gray-200'
        } ${className}`}
        aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
        <Sun 
          className={`absolute left-1 h-3 w-3 text-yellow-500 transition-opacity ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Moon 
          className={`absolute right-1 h-3 w-3 text-gray-300 transition-opacity ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={toggleDarkMode}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
        aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        {isDarkMode ? (
          <>
            <Sun size={iconSizes[size]} className="text-yellow-500" />
            <span className="text-gray-700 dark:text-gray-300">Mode clair</span>
          </>
        ) : (
          <>
            <Moon size={iconSizes[size]} className="text-gray-600" />
            <span className="text-gray-700 dark:text-gray-300">Mode sombre</span>
          </>
        )}
      </button>
    );
  }

  // Variant 'icon' (default)
  return (
    <button
      onClick={toggleDarkMode}
      className={`${sizeClasses[size]} rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${className}`}
      aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun 
          size={iconSizes[size]} 
          className={`absolute text-yellow-500 transition-all duration-300 ${
            isDarkMode 
              ? 'opacity-0 rotate-180 scale-50' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon 
          size={iconSizes[size]} 
          className={`absolute text-gray-600 dark:text-gray-300 transition-all duration-300 ${
            isDarkMode 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-50'
          }`}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;