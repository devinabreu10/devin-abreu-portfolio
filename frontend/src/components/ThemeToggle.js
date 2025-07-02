import React from 'react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
        ) : (
          <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ThemeToggle;