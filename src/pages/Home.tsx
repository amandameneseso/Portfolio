// src/pages/Home.tsx
import AppIcon from '../components/AppIcon';
import TechStackWidget from '../components/TechStackWidget';
import AboutDetailsWidget from '../components/AboutDetailsWidget'; // Importação atualizada para o seu widget "Sobre Mim"
import QuoteWidget from '../components/QuoteWidget';
import './Home.css'; // Estilos específicos da Home
import { useState } from 'react';
import ThemeSettings from '../components/ThemeSettings'; // Importe o novo modal

// Mock de dados para demonstração. Em um projeto real, isso viria de um arquivo de dados.
const technologiesData = [
  { name: 'HTML', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'TypeScript', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Bootstrap', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Git', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
];

// Dados para o widget "Sobre Mim"
const aboutMeDetails = [
  "Estudo graduação em Análise e Desenvolvimento de Sistemas,",
  "Gosto de criar sites para qualquer necessidade que tenho,",
  "Sempre em busca de novos desafios e aprendizado contínuo.",
];

function Home() {
    const [showTheme, setShowTheme] = useState(false);

  return (
    <div className="home-desktop">
      {/* Título da seção principal */}
      {/* <h1 className="section-title">Bem-vindo ao Meu Portfólio</h1> */}

      <div className="widgets-grid">
        {/* Widget de Tech Stack */}
        <TechStackWidget technologies={technologiesData} />

        {/* Widget de Detalhes sobre Mim (com texto e lista) */}
        <AboutDetailsWidget
          title="Sobre mim"
          detailsPoints={aboutMeDetails} // Ainda passa a lista de pontos
        >
          {/* texto */}
          <p id="about-me-text">Oi! Eu sou Amanda. Eu...</p>
          {/* lista */}
        </AboutDetailsWidget>

        {/* Ícones de Aplicativos */}
        <div className="app-icons-container">
          <AppIcon iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" label="GitHub" href="https://github.com/amandameneseso" />
          <AppIcon iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" label="LinkedIn" href="https://www.linkedin.com/in/amanda-oliveira-de-meneses/" />
          {/* <AppIcon iconSrc="/icons/email.png" label="Contato" onClick={() => window.location.href = 'mailto:[seu.email@example.com]'} /> */}
          <AppIcon
            iconSrc="https://img.icons8.com/color/48/apple-settings.png"
            label="Configurações"
            onClick={() => setShowTheme(true)}
          />
        </div>

        {/* Widget de Citação */}
        <QuoteWidget
          quote="The man who moves a mountain begins by carrying away small stones."
        />

      </div>
      <ThemeSettings
        isOpen={showTheme}
        onClose={() => setShowTheme(false)}
      />
    </div>
  );
}

export default Home;