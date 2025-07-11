import React from 'react';
import { useTheme } from '../context/theme-utils';
import './ThemeSettings.css';

interface ThemeSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Configurações</h2>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>

        <div className="theme-options">
          <button
            className={`theme-button ${theme === 'light' ? 'active' : ''}`}
            onClick={() => {
              setTheme('light');
              onClose();
            }}
          >
            Tema claro
          </button>
          <button
            className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => {
              setTheme('dark');
              onClose();
            }}
          >
            Tema escuro
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;