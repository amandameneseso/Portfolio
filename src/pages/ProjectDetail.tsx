import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

import previa from '../assets/images/previa.png';
import resumosads from '../assets/images/resumosads.png';
import avocode from '../assets/images/avocode.png';
import formulario1 from '../assets/images/formulario1.png';
import formulario2 from '../assets/images/formulario2.png';
import lojaDeRoupas from '../assets/images/loja-de-roupas.png';
import lojaDeRoupasAdm from '../assets/images/loja-de-roupas-adm.png';

// Dados dos projetos
const projectsData = [
  {
    id: "miminho",
    name: "Miminho",
    description: `<p>O Miminho é um projeto desenvolvido com foco em personalização e experiência do usuário. Trata-se de uma aplicação web interativa construída com React + TypeScript, que transforma informações fornecidas pelo cliente em um site personalizado, com estilo inspirado na interface de um celular, entregue automaticamente por e-mail com link exclusivo e QR Code.</p>
    <p>O projeto também conta com uma página de oferta e um agregador de links.</p>
    <p>Este projeto demonstra experiência na criação de SPAs.</p>`,
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    imageUrl: previa,
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
    imageUrl: resumosads,
    liveUrl: "https://resumos-ads.vercel.app/",
    githubUrl: "https://github.com/amandameneseso/Resumos-ADS",
  },
  {
    id: "avocode",
    name: "Avocode",
    description:`<p>Sou a criadora do Avocode, um projeto focado no ensino de programação e tem como propósito orientar pessoas que estão iniciando no mundo da tecnologia a aprender programação. Criei esse projeto quando iniciei os estudos em tecnologia para servir como repositório dos resumos, atividades e desafios que fiz enquanto estudava de forma autodidata.</p>`,
    technologies: ["HTML", "CSS"],
    imageUrl: avocode,
    liveUrl: "https://amandameneseso.github.io/Avocode/",
    githubUrl: "https://github.com/amandameneseso/Avocode",
  },
  {
    id: "cadastroComAutomacao",
    name: "Automação com Python",
    description:`<p>Criei um sistema de cadastro de produtos que contém uma página de login, uma página de cadastro de produtos e uma automação em Python que preenche os dados direto no sistema a partir de um arquivo .csv que funciona como banco de dados. Esse projeto integra três partes distintas para otimizar o processo de cadastro de produtos:</p>
    <ul>
      <li>Interface Web: Criei uma interface visual intuitiva com uma página de login e um formulário para o cadastro de novos produtos. Além disso, quando adicionados, os produtos cadastrados são exibidos em uma tabela.</li>
      <li>Automação com Python (PyAutoGUI): Desenvolvi um script que automatiza o preenchimento dos dados, simulando as ações de um usuário.</li>
      <li>Processamento de dados: O script utiliza a biblioteca Pandas para ler dados de uma base de dados em formato .csv, tornando o processo de importação de informações eficiente e flexível.</li>
    </ul>
    <p>Criei também uma interface em Python para facilitar o uso, que permite ao usuário selecionar o arquivo .csv contendo os dados dos produtos. Esse projeto foi uma ótima forma de aplicar conhecimentos em automação, Python, JavaScript, HTML, CSS e integração entre tecnologias.</p>`,
    technologies: ["HTML", "CSS", "JavaScript", "Python", "PyAutoGUI", "Pandas"],
    imageUrl: formulario1,
    imageUrlDesktop: formulario2,
    liveUrl: "https://amandameneseso.github.io/Sistema-de-cadastro-de-produtos/",
    githubUrl: [ // Array de URLs do GitHub
      { url: "https://github.com/amandameneseso/Sistema-de-cadastro-de-produtos", label: "Repositório da Interface Web" },
      { url: "https://github.com/amandameneseso/Automacao-para-o-Sistema-de-cadastro-de-produtos", label: "Repositório da automação" }
    ],
    videoUrl: "https://youtu.be/XizJoxPfFkU?si=BDZG-UCe2MfJK3az",
  },
  {
    id: "lojaDeRoupas",
    name: "Loja de Roupas",
    description:`<p>Desenvolvi um site de loja Full Stack usando React JS, MongoDB, Express JS e Node JS.</p>
    <p>Na loja, o usuário pode explorar produtos, arquivá-los e comprá-los, além de adicioná-los ao carrinho e selecionar variantes do produto, como tamanho. O usuário também pode encomendar o produto informando o endereço de entrega e usando qualquer método de pagamento. Adicionei o gateway de pagamento online Stripe para que o cliente possa pagar online e fazer o pedido.</p>
    <p>Também construí um painel de administração para que o administrador possa adicionar produtos, excluí-los ou verificar todos os produtos adicionados à loja. Construí o backend usando Node.js e Express, e todos os dados de produtos, usuários e pedidos são armazenados no banco de dados MongoDB.</p>`,
    technologies: ["React", "Tailwind CSS", "MongoDB", "Express JS", "Node JS", "Stripe"],
    imageUrl: lojaDeRoupas,
    imageUrlDesktop: lojaDeRoupasAdm,
    liveUrl: "https://loja-frontend-gamma.vercel.app/",
    githubUrl: "https://github.com/amandameneseso/Loja-de-roupas",
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Estados para controlar o modal da imagem
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const project = projectsData.find((p) => p.id === id);

  // Função para abrir o modal de imagem
  const openImageModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  // Função para fechar o modal de imagem
  const closeImageModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

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

      <div className="project-content-two-columns">
        <div className="project-images-column">
          <img
            src={project.imageUrl}
            alt={`${project.name} - Imagem Principal`}
            className="project-detail-image"
            onClick={() => openImageModal(project.imageUrl)} // Adicionado onClick para abrir o modal da imagem
            style={{ cursor: 'pointer' }}
          />
          {project.imageUrlDesktop && ( // Renderiza condicionalmente a segunda imagem
            <img
              src={project.imageUrlDesktop}
              alt={`${project.name} - Imagem Desktop`}
              className="project-detail-image desktop"
              onClick={() => openImageModal(project.imageUrlDesktop)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>

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
            {/* Verifica se githubUrl é um array ou uma string e renderiza os links apropriados */}
            {Array.isArray(project.githubUrl) ? (
              project.githubUrl.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button github"
                >
                  <i className="fab fa-github link-icon"></i> {repo.label}
                </a>
              ))
            ) : (
              // Se githubUrl não for um array
              project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button github"
                >
                  <i className="fab fa-github link-icon"></i> Repositório no GitHub
                </a>
              )
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
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button youtube"
              >
                <i className="fab fa-youtube link-icon"></i> Vídeo de demonstração
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Imagem */}
      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeImageModal}>&times;</span>
            <img src={modalImage} alt="Imagem Ampliada" className="modal-image" />
          </div>
        </div>
      )}      
    </div>
  );
};

export default ProjectDetail;