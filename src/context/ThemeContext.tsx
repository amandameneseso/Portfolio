// src/context/ThemeContext.tsx
// Este arquivo agora exporta APENAS o componente ThemeProvider

import React, { useState } from 'react';
import type { ReactNode } from 'react';

// --- CAMINHOS ATUALIZADOS AQUI ---
import { ThemeContext } from './theme-utils'; // <-- AGORA IMPORTA DE theme-utils
import type { ThemeContextType } from './theme-utils'; // <-- AGORA IMPORTA DE theme-utils
// --- FIM DOS CAMINHOS ATUALIZADOS ---

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setThemeState(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const contextValue: ThemeContextType = { theme, toggleTheme, setTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};