// src/components/ThemeSettings.tsx
import React from 'react';
import { useTheme } from '../context/theme-utils';
import './ThemeSettings.css';

interface ThemeSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme(); // Pega o tema atual e a função setTheme do contexto

  if (!isOpen) {
    return null; // Não renderiza nada se o modal não estiver aberto
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Impede que o clique no conteúdo feche o modal */}
        <h2>Configurações</h2>
        <div className="theme-options">
          <button
            className={`theme-button ${theme === 'light' ? 'active' : ''}`}
            onClick={() => {
              setTheme('light');
              onClose(); // Fecha o modal após a seleção
            }}
          >
            Tema claro
          </button>
          <button
            className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => {
              setTheme('dark');
              onClose(); // Fecha o modal após a seleção
            }}
          >
            Tema escuro
          </button>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;