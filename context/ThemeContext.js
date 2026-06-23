import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const light = {
  background: '#f5f5f5',
  card: '#ffffff',
  text: '#1a1a1a',
  textSecondary: '#666666',
  border: '#e0e0e0',
};

const dark = {
  background: '#121212',
  card: '#1e1e1e',
  text: '#f0f0f0',
  textSecondary: '#999999',
  border: '#333333',
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ theme: isDark ? dark : light, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
