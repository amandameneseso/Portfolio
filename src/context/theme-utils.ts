// src/context/theme-utils.ts

import { createContext, useContext } from 'react';

// Define os tipos para o contexto do tema
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (newTheme: 'light' | 'dark') => void;
}

// Cria o objeto de contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Cria o hook personalizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};