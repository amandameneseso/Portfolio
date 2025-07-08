// src/components/AboutDetailsWidget.tsx
import React from 'react';
import type { ReactNode } from 'react'; // Importação de tipo para ReactNode
import Widget from './Widget'; // Importa o componente base Widget
import './AboutDetailsWidget.css'; // Importa o CSS específico para este widget

interface AboutDetailsWidgetProps {
  title: string;
  children?: ReactNode; // Novo: Para aceitar conteúdo flexível (parágrafos, etc.)
  detailsPoints?: string[]; // Mantido: Para a lista de pontos
}

const AboutDetailsWidget: React.FC<AboutDetailsWidgetProps> = ({ title, children, detailsPoints }) => {
  return (
    <Widget title={title} className="about-details-widget">
      {children} {/* <--- RENDERIZA O CONTEÚDO FLEXÍVEL AQUI PRIMEIRO */}

      {detailsPoints && detailsPoints.length > 0 && ( // Renderiza a lista APENAS se houver pontos
        <ul className="details-list"> {/* Usa as classes CSS já definidas em AboutDetailsWidget.css */}
          {detailsPoints.map((point, index) => (
            <li key={index} className="details-item">
              <span className="bullet-icon">●</span> {point}
            </li>
          ))}
        </ul>
      )}
    </Widget>
  );
};

export default AboutDetailsWidget;