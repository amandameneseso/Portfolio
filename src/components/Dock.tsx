// src/components/Dock.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dock.css';

// Define o tipo para os itens do dock
interface DockItem {
  id: string;
  icon: string; // Pode ser um emoji, um caminho para uma imagem, ou um componente de ícone (agora, uma string HTML para Font Awesome)
  label: string;
  path?: string; // Caminho interno (para NavLink)
  href?: string; // URL externa (para <a>)
  external?: boolean; // Sinaliza se é um link externo
}

interface DockProps {
  items: DockItem[];
}

const Dock: React.FC<DockProps> = ({ items }) => {
  return (
    <div className="dock-container">
      <div className="dock">
        {items.map((item) => (
          <div key={item.id} className="dock-item">
            {item.external ? (
              // Link externo (ex: GitHub, LinkedIn)
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
              >
                {/* AQUI ESTÁ A MUDANÇA para o link externo: */}
                <span className="dock-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                {/* <span className="dock-label">{item.label}</span> */}
              </a>
            ) : (
              // Link interno (para Rotas do React)
              <NavLink
                to={item.path || '/'} // Fallback para "/" se path não for definido
                className={({ isActive }) =>
                  `dock-link ${isActive ? 'active' : ''}`
                }
                title={item.label}
              >
                {/* AQUI ESTÁ A MUDANÇA para o link interno: */}
                <span className="dock-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                {/* <span className="dock-label">{item.label}</span> */}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;