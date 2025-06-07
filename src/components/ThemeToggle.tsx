import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <div className="btn-group" role="group" aria-label="Theme switcher">
    <button
      onClick={toggleTheme}
      className={`btn btn-sm ${theme === 'light' ? 'btn-outline-secondary' : 'btn-outline-warning'}`}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  </div>
);

export default ThemeToggle;