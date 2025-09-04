// src/components/Widget.tsx
import React from 'react';
import type { ReactNode } from 'react';
import './Widget.css';

interface WidgetProps {
  title?: string; // Título opcional do widget
  children: ReactNode; // Conteúdo que será renderizado dentro do widget
  className?: string; // Para adicionar classes CSS específicas se necessário
  onClick?: () => void;
}

const Widget: React.FC<WidgetProps> = ({ title, children, className, onClick }) => {
  return (
    <div 
      className={`widget-card ${className || ''}`} 
      onClick={onClick}
      role={onClick ? 'button' : undefined} // acessibilidade opcional
      tabIndex={onClick ? 0 : undefined} // acessibilidade opcional
    >
      {title && <h3 className="widget-title">{title}</h3>}
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};

export default Widget;