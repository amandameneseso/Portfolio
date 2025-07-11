import AppIcon from "../components/AppIcon";
import TechStackWidget from "../components/TechStackWidget";
import AboutDetailsWidget from "../components/AboutDetailsWidget";
import QuoteWidget from "../components/QuoteWidget";
import "./Home.css";
import { useState } from "react";
import ThemeSettings from "../components/ThemeSettings";

const technologiesData = [
  {
    name: "HTML",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Bootstrap",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Git",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

const aboutMeDetails = [
  "Estudo graduação em Análise e Desenvolvimento de Sistemas,",
  "Gosto de criar sites para qualquer necessidade que tenho,",
  "Sempre em busca de novos desafios e aprendendo.",
  "Você pode conferir meus principais projetos nas seções abaixo.",
];

function Home() {
  const [showTheme, setShowTheme] = useState(false);

  return (
    <div className="home-desktop">
      <div className="widgets-grid">
        <TechStackWidget technologies={technologiesData} />

        <AboutDetailsWidget
          title="Sobre mim"
          detailsPoints={aboutMeDetails}
          imageSrc="/images/eu2.png"
        >
          <p id="about-me-text">Oi! Eu sou Amanda. Eu...</p>
        </AboutDetailsWidget>

        <div className="app-icons-container">
          <AppIcon
            iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            label="GitHub"
            href="https://github.com/amandameneseso"
          />
          <AppIcon
            iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            label="LinkedIn"
            href="https://www.linkedin.com/in/amanda-oliveira-de-meneses/"
          />
          <AppIcon
            iconSrc="https://img.icons8.com/office/48/view-file.png"
            label="Currículo"
            href="/curriculo.pdf"
            // download="Curriculo-Amanda-Meneses.pdf"
          />
          <AppIcon
            iconSrc="https://img.icons8.com/color/48/apple-settings.png"
            label="Configurações"
            onClick={() => setShowTheme(true)}
          />
        </div>

        <QuoteWidget quote="The man who moves a mountain begins by carrying away small stones." />
      </div>
      <ThemeSettings isOpen={showTheme} onClose={() => setShowTheme(false)} />
    </div>
  );
}

export default Home;
