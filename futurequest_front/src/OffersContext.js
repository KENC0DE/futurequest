import React, { createContext, useState, useContext } from 'react';

const OffersContext = createContext();

export const useOffers = () => useContext(OffersContext);

export const OffersProvider = ({ children }) => {
  const [params, setParams] = useState({});
  const [selectedOfferId, setSelectedOfferId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <OffersContext.Provider value={{ params, setParams, selectedOfferId, setSelectedOfferId, darkMode, setDarkMode }}>
      {children}
    </OffersContext.Provider>
  );
};