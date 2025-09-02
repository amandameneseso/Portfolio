// src/components/TechStackWidget.tsx
import React from "react";
import Widget from "./Widget";
import "./TechStackWidget.css";

interface Technology {
  name: string;
  iconSrc: string;
}

interface TechStackWidgetProps {
  technologies: Technology[];
}

const TechStackWidget: React.FC<TechStackWidgetProps> = ({ technologies }) => {

  const playHoverSound = () => {
    const audio = new Audio("/sounds/select-sound.mp3"); // caminho relativo à pasta public
    audio.volume = 0.3; // volume mais baixo
    audio.play().catch(() => {}); // evita erro se o usuário não tiver interação prévia
  };


  return (
    <Widget title="Tecnologias" className="tech-stack-widget">
      <div className="tech-icons-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-item" onMouseEnter={playHoverSound}>
            <img src={tech.iconSrc} alt={tech.name} className="tech-icon-img" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default TechStackWidget;
