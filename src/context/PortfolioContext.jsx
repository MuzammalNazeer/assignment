import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
    user,
    setUser
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};