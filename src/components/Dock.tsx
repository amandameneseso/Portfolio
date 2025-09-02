// src/components/Dock.tsx
import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './Dock.css';

// Define o tipo para os itens do dock
interface DockItem {
  id: string;
  icon: string;
  label: string;
  path?: string; // Caminho interno (para NavLink)
  href?: string; // URL externa (para <a>)
  external?: boolean; // Sinaliza se é um link externo
}

interface DockProps {
  items: DockItem[];
}

const Dock: React.FC<DockProps> = ({ items }) => {
  const playClickSound = useCallback(() => {
    const audio = new Audio("/sounds/pop-cartoon.mp3");
    audio.volume = 0.4; // volume mais baixo para não incomodar
    audio.play().catch(() => {});
  }, []);

  return (
    <div className="dock-container">
      <div className="dock">
        {items.map((item) => (
          <div key={item.id} className="dock-item">
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                onClick={playClickSound}
              >
                <span className="dock-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
              </a>
            ) : (
              // Link interno (para Rotas do React)
              <NavLink
                to={item.path || '/'} // Fallback para "/" se path não for definido
                className={({ isActive }) =>
                  `dock-link ${isActive ? 'active' : ''}`
                }
                title={item.label}
                onClick={playClickSound}
              >
                <span className="dock-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;