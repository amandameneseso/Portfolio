// src/pages/ProjectDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import previa from '../assets/images/previa.png';
import previaDesktop from '../assets/images/previa-desktop.png';

const projectsData = [
  {
    id: "miminho",
    name: "Miminho",
    description: `<p>O Miminho é um projeto desenvolvido com foco em personalização e experiência do usuário. Trata-se de uma aplicação web interativa construída com React + TypeScript, que transforma informações fornecidas pelo cliente em um site personalizado, com estilo inspirado na interface de um celular, entregue automaticamente por e-mail com link exclusivo e QR Code.</p>
    <p>O projeto também conta com uma página de oferta e um agregador de links.</p>
    <p>Este projeto demonstra experiência na criação de SPAs.</p>`,
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    imageUrl: previa,
    imageUrlDesktop: previaDesktop,
    liveUrl: "https://miminho.vercel.app/",
    githubUrl: "https://github.com/amandameneseso/Presente-react",
    offerPageUrl: "https://amandameneseso.github.io/Miminho/",
    linkAggregatorUrl: "https://amandameneseso.github.io/Agregador-de-links-do-Miminho/",
  },
  {
    id: "resumos-ads",
    name: "Resumos ADS",
    description:`<p>Criei esse site com o intuito de manter um repositório online dos resumos que crio enquanto estudo Análise e Desenvolvimento de Sistemas e ajudar outras pessoas que também fazem o mesmo.</p>
    <p>Funcionalidades:</p>
    <ul>
      <li>Calendário de atividades</li>
      <li>Tema escuro</li>
      <li>Navegação por disciplinas</li>
    </ul>`,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "FullCalendar",
    ],
    imageUrl: "/images/ecommerce-shop-full.png",
    liveUrl: "https://resumos-ads.vercel.app/",
    githubUrl: "https://github.com/amandameneseso/Resumos-ADS",
  },
  {
    id: "avocode",
    name: "Avocode",
    description:
      "A collection of my academic and professional resumes, showcasing my skills and accomplishments. Includes a modern and visually appealing design.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    imageUrl: "/images/resumos-full.png",
    liveUrl: "https://resumos.vercel.app",
    githubUrl: "https://github.com/seu-usuario/resumos",
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((p) => p.id === id);

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

      {/* CONTÊINER FLEXBOX PARA O LAYOUT DE DUAS COLUNAS */}
      <div className="project-content-two-columns">
        {/* NOVO CONTÊINER PARA AS IMAGENS (COLUNA ESQUERDA) */}
        <div className="project-images-column"> {/* Adicionei uma nova div para as imagens */}
          <img
            src={project.imageUrl}
            alt={`${project.name} - Imagem Principal`}
            className="project-detail-image"
          />
          {project.imageUrlDesktop && ( // Condicionalmente renderiza a segunda imagem
            <img
              src={project.imageUrlDesktop}
              alt={`${project.name} - Imagem Desktop`}
              className="project-detail-image desktop" // Adicionei uma classe para estilização específica
            />
          )}
        </div>

        {/* Conteúdo de Texto (coluna direita) */}
        <div className="project-text-content">
          <div
            className="project-detail-description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className="project-tech-stack">
            <h3>Tecnologias usadas:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button"
              >
                <i className="fas fa-external-link-alt link-icon"></i> Ver projeto
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button github"
              >
                <i className="fab fa-github link-icon"></i> Repositório no GitHub
              </a>
            )}
            {project.offerPageUrl && (
              <a
                href={project.offerPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button offer"
              >
                <i className="fas fa-gift link-icon"></i> Página de oferta
              </a>
            )}
            {project.linkAggregatorUrl && (
              <a
                href={project.linkAggregatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button aggregator"
              >
                <i className="fas fa-list-alt link-icon"></i> Agregador de links
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;