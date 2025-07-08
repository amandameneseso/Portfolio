// src/components/ProjectImageWidget.tsx
import React from 'react';
import Widget from './Widget';
import './ProjectImageWidget.css';

interface ProjectImageWidgetProps {
  imageSrc: string;
  altText: string;
}

const ProjectImageWidget: React.FC<ProjectImageWidgetProps> = ({ imageSrc, altText }) => {
  return (
    <Widget className="project-image-widget">
      <img src={imageSrc} alt={altText} className="project-preview-img" />
    </Widget>
  );
};

export default ProjectImageWidget;