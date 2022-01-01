import React, { SetStateAction, useState } from 'react';

interface ThemeContextInterface {

}
const ThemeContext = React.createContext<[Boolean?, any?]>([]);

export const AppWrapper = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState<Boolean>(false);

  return (
    <ThemeContext.Provider value={[isDarkMode, setDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;