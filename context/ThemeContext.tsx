import React, { ReactComponentElement, useState } from 'react';

const ThemeContext = React.createContext<[Boolean?, any?]>([]);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setDarkMode] = useState<Boolean>(false);

  return (
    <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 
