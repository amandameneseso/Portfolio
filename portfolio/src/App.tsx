// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa os componentes de UI (StatusBar e Dock)
import StatusBar from './components/StatusBar';
import Dock from './components/Dock';

// Importa as páginas/views da sua aplicação
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// Importa os estilos globais
import './styles/App.css';

function App() {
  // Dados mockados para os itens do Dock.
  // Em um projeto real, você pode obter isso de um arquivo de configuração ou API.
  const dockItems = [
    { id: 'home', icon: '🏠', label: 'Início', path: '/' },
    { id: 'project-pomodoro', icon: '⏰', label: 'Pomodoro', path: '/projects/cozy-pomodoro' },
    { id: 'project-ecommerce', icon: '🛒', label: 'E-commerce', path: '/projects/ecommerce-shop' },
    { id: 'github', icon: '🐙', label: 'GitHub', href: 'https://github.com/seu-usuario', external: true },
    { id: 'linkedin', icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil', external: true },
    // Adicione mais itens conforme seus projetos ou links importantes
  ];

  return (
    <Router>
      <div className="ipad-layout">
        {/* Barra de Status na parte superior */}
        <StatusBar />

        {/* Área de conteúdo principal onde as páginas serão renderizadas */}
        <div className="content-area">
          <Routes>
            {/* Rota para a página inicial (Home Desktop) */}
            <Route path="/" element={<Home />} />

            {/* Rota para detalhes de projetos específicos
                Usamos ':id' como um parâmetro de URL para identificar o projeto */}
            <Route path="/projects/:id" element={<ProjectDetail />} />

            {/* Você pode adicionar mais rotas aqui para outras seções do portfólio */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        {/* Dock (Barra de Ferramentas) na parte inferior */}
        <Dock items={dockItems} />
      </div>
    </Router>
  );
}

export default App;