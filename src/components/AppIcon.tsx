// src/components/AppIcon.tsx
import React from 'react';
import './AppIcon.css';

interface AppIconProps {
  iconSrc: string; // Caminho para a imagem do ícone
  label: string;
  onClick?: () => void; // Para ações internas
  href?: string; // Para links externos
}

const AppIcon: React.FC<AppIconProps> = ({ iconSrc, label, onClick, href }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="app-icon-wrapper" onClick={handleClick}>
      <div className="app-icon">
        <img src={iconSrc} alt={label} className="app-icon-image" />
      </div>
      <span className="app-label">{label}</span>
    </div>
  );
};

export default AppIcon;