// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import { NotificationProvider } from "./context/NotificationContext";

import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/theme-utils";

import StatusBar from "./components/StatusBar";
import Dock from "./components/Dock";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
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
      id: "lojaDeRoupas",
      icon: '<i class="fa-solid fa-cart-shopping"></i>',
      label: "Loja de roupas",
      path: "/projects/lojaDeRoupas",
    },
    {
      id: "miminho",
      icon: '<i class="fa-solid fa-gift"></i>',
      label: "Miminho",
      path: "/projects/miminho",
    },
    {
      id: "resumos-ads",
      icon: '<i class="fa-solid fa-book"></i>',
      label: "Resumos ADS",
      path: "/projects/resumos-ads",
    },
    {
      id: "avocode",
      icon: '<i class="fas fa-file-alt"></i>',
      label: "Avocode",
      path: "/projects/avocode",
    },
    {
      id: "cadastroComAutomacao",
      icon: '<i class="fa-brands fa-python"></i>',
      label: "Automação com Python",
      path: "/projects/cadastroComAutomacao",
    },
  ];

  return (
    <NotificationProvider>
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
    </NotificationProvider>
  );
}

export default App;
