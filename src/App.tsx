// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

// --- CAMINHOS ATUALIZADOS AQUI ---
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/theme-utils"; // <-- AGORA IMPORTA DE theme-utils
// --- FIM DOS CAMINHOS ATUALIZADOS ---

// Importa os componentes de UI (StatusBar e Dock)
import StatusBar from "./components/StatusBar";
import Dock from "./components/Dock";

// Importa as páginas/views da sua aplicação
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Importa os estilos globais
import "./styles/App.css";

// Componente interno para aplicar a classe do tema ao body
const ThemeApplier: React.FC = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.className = theme === "dark" ? "theme-dark" : "theme-light";
  }, [theme]);
  return null;
};

function App() {
  const dockItems = [
    {
      id: "home",
      icon: '<i class="fas fa-home"></i>',
      label: "Início",
      path: "/",
    },
    {
      id: "miminho",
      icon: '<i class="fa-solid fa-gift"></i>',
      label: "Pomodoro",
      path: "/projects/miminho",
    },
    {
      id: "resumos-ads",
      icon: '<i class="fa-solid fa-book"></i>',
      label: "E-commerce",
      path: "/projects/resumos-ads",
    },
    {
      id: "avocode",
      icon: '<i class="fas fa-file-alt"></i>',
      label: "Resumos",
      path: "/projects/avocode",
    },
  ];

  return (
    <ThemeProvider>
      <ThemeApplier />
      <Router>
        <div className="ipad-layout">
          <StatusBar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
          <Dock items={dockItems} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
