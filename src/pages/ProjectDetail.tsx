// src/pages/ProjectDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

// Dados mockados de projetos para demonstração
const projectsData = [
  {
    id: 'cozy-pomodoro',
    name: 'Sobre mim',
    description: 'A beautiful and calming Pomodoro timer designed for focused work sessions. Features customizable intervals, ambient sounds, and a cozy aesthetic to enhance mindfulness during work.',
    technologies: ['React', 'TypeScript', 'CSS', 'Framer Motion'],
    imageUrl: '/images/eu.png',
    liveUrl: 'https://cozy-pomodoro.vercel.app',
    githubUrl: 'https://github.com/seu-usuario/cozy-pomodoro',
  },
  {
    id: 'ecommerce-shop',
    name: 'Miminho',
    description: 'A fully functional e-commerce platform built with modern web technologies. Includes product listings, shopping cart, user authentication, and secure checkout process.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Firebase'],
    imageUrl: '/images/ecommerce-shop-full.png',
    liveUrl: 'https://ecommerce-shop.vercel.app',
    githubUrl: 'https://github.com/seu-usuario/ecommerce-shop',
  },
  {
    id: 'resumos',
    name: 'Resumos',
    description: 'A collection of my academic and professional resumes, showcasing my skills and accomplishments. Includes a modern and visually appealing design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    imageUrl: '/images/resumos-full.png',
    liveUrl: 'https://resumos.vercel.app',
    githubUrl: 'https://github.com/seu-usuario/resumos',
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail-container">
        <h2>Projeto não encontrado.</h2>
        <p>Volte para a página inicial ou verifique a URL.</p>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <h1 className="project-detail-title">{project.name}</h1>
      
      {/* NOVO CONTÊINER FLEXBOX PARA O LAYOUT DE DUAS COLUNAS */}
      <div className="project-content-two-columns">
        {/* Imagem (esquerda) */}
        <img src={project.imageUrl} alt={project.name} className="project-detail-image" />
        
        {/* Conteúdo de Texto (direita) */}
        <div className="project-text-content">
          <p className="project-detail-description">{project.description}</p>

          <div className="project-tech-stack">
            <h3>Tecnologias Usadas:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-button">
                Ver Projeto Online
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-button github">
                Ver Código no GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;