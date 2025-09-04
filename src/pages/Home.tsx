import AppIcon from "../components/AppIcon";
import TechStackWidget from "../components/TechStackWidget";
import AboutDetailsWidget from "../components/AboutDetailsWidget";
import QuoteWidget from "../components/QuoteWidget";
import "./Home.css";
import { useState, useEffect } from "react";
import ThemeSettings from "../components/ThemeSettings";
import Notification from "../components/Notification";
import { useNotifications } from "../context/NotificationContext";
import type { ReactNode } from "react";

const Notifications = [
  <>Notificação: <strong>Modo silencioso detectado.</strong> Clique em qualquer lugar da tela para liberar os sons.</>,
  <>Notícia: "<b>Conferência global</b>: <i>Programadores debatem se React foi criado para testar a paciência humana.</i>"</>,
  <>Espaço de armazenamento: "Seu disco local está quase cheio. Por favor, delete arquivos inúteis (como as 50 versões do mesmo projeto)."</>,
  <>Notícia: "<b>Programadora informa:</b> <i>“Se houver algum bug nesse portfólio, a culpa é do gato — ele passou pelo teclado”.</i>"</>,
  <>WhatsApp: "Você tem 347 novas mensagens do grupo 'como centralizar uma div'."</>,
  <>Notícia: "<b>Estudo mostra</b>: <i>Quem comenta o próprio código vive 10 anos a mais.</i>"</>,
  <>LinkedIn: "Seu portfólio foi visto por um recrutador. Mas ele só queria ver as notícias."</>,
  <>Notícia: "<b>Inteligência Artificial admite:</b> <i>“Sim, eu também uso Stack Overflow”.</i>"</>,
  <>Notícia: "<b>Falha no espaço-tempo:</b> <i>Devs descobrem que “só mais um commit” pode durar 5 horas.</i>"</>,
  <>Notícia: "<b>Nova IA lançada:</b> <i>Ela gera código… mas código Morse.</i>"</>,
  <>Notícia: "Bóson de Higgs é encontrado atrás de computador. Dono confuso."</>,
  <>Notícia: "<b>Escândalo global:</b> <i>Documentação completa e perfeita é encontrada. Programadores não sabem como reagir.</i>"</>,
  <>Notícia: "Macacos digitadores reproduzem Shakespeare. Teorema já previa."</>,
  <>Notícia: "Encanador bigodudo processado por matar tartarugas."</>,
  <>Notícia: "<b>Economia em alerta:</b> <i>Preço do café triplica após devs admitirem dependência extrema.</i>"</>,
  <>Notícia: "<b>Novo app revolucionário:</b> <i>Envia notificações para lembrar você de ignorar notificações.</i>"</>,
  <>Notícia: "<b>Conflito Internacional:</b> <i>Programadores usuários de Windows e Linux declaram trégua para debater a melhor forma de centralizar uma div.</i>"</>,
  <>Notícia: "Escada impede fuga de robô rolante."</>,
  <>Notícia: "<b>Descoberta energia barata e limpa:</b> <i>Empresa de tecnologia afirma ter desenvolvido usina que funciona totalmente a base de gargalhadas de crianças. Nega relatos da existência de monstros por perto.</i>"</>,
  <>Notícia: "Malware em meme de gatinhos causa perda de dados."</>,
];

const quotes = [
  "O homem que move uma montanha começa carregando pequenas pedras.",
  "Simplicidade é a alma da eficiência.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Se você não pode fazer grandes coisas, faça pequenas coisas de uma maneira excelente."
];

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
    name: "Tailwind CSS",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [notifications, setNotifications] = useState<ReactNode[]>([]);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const { areNotificationsEnabled } = useNotifications();

  // Combinei a lógica de notificações em um único useEffect
  useEffect(() => {
    let interval: number;
    if (areNotificationsEnabled) {
      interval = setInterval(() => {
        if (notificationIndex < Notifications.length) {
          const message = Notifications[notificationIndex];
          setNotifications((prev) => [...prev, message]);
          setNotificationIndex(prev => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 30000); // a cada 30 segundos aparece uma notificação
    }

    return () => {
      // Garante que o intervalo é limpo, mesmo se areNotificationsEnabled mudar
      if (interval) clearInterval(interval);
    };
  }, [areNotificationsEnabled, notificationIndex]);

  // Combinei as lógicas da função em uma única função
  const handleQuoteClick = () => {
    if (areNotificationsEnabled) {
      const audio = new Audio("/sounds/turn-page.mp3");
      audio.play();
    }
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const handleCloseNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

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

        <QuoteWidget
          quote={quotes[quoteIndex]}
          onClick={handleQuoteClick} // passa a função de clique
        />

        {areNotificationsEnabled && notifications.map((msg, i) => (
        <Notification
          key={i}
          message={msg}
          onClose={() => handleCloseNotification(i)}
        />
      ))}
      </div>
      <ThemeSettings isOpen={showTheme} onClose={() => setShowTheme(false)} />
    </div>
  );
}

export default Home;
