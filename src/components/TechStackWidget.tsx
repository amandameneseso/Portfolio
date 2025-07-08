// src/components/TechStackWidget.tsx
import React from 'react';
import Widget from './Widget'; // Importa o componente base Widget
import './TechStackWidget.css';

interface Technology {
  name: string;
  iconSrc: string; // Caminho para o ícone da tecnologia
}

interface TechStackWidgetProps {
  technologies: Technology[];
}

const TechStackWidget: React.FC<TechStackWidgetProps> = ({ technologies }) => {
  return (
    <Widget title="Tecnologias" className="tech-stack-widget">
      <div className="tech-icons-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img src={tech.iconSrc} alt={tech.name} className="tech-icon-img" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default TechStackWidget;