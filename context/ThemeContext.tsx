import React, { useState } from 'react';

const ThemeContext = React.createContext<[Boolean?, any?]>([]);

type AppWrapperProps = { children: React.ReactNode, darkMode?: boolean };

export const AppWrapper = ({ children, darkMode = false }: AppWrapperProps) => {
  const [isDarkMode, setDarkMode] = useState<Boolean>(darkMode);

  return (
    <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 
