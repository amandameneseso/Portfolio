// src/components/AppIcon.tsx
import React from 'react';
import './AppIcon.css';

interface AppIconProps {
  iconSrc: string;
  label: string;
  onClick?: () => void;
  href?: string;
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