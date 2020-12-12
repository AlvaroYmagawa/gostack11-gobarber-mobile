import React, { createContext, useContext, useState } from 'react';

//* THEMES
import dark from '../styles/themes/dark';

interface ThemeContextData {
  theme: {
    colors: {
      background: string;
      primary: string;
      accent: string;

      text: string;
      opaqueText: string;
    };
  };
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  //* CONTEXT VALUE
  const [theme, setTheme] = useState(dark);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within ThemeProvider');

  return context;
};

export { ThemeProvider, useTheme };
