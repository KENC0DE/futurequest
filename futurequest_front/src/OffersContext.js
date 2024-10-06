import React, { createContext, useState, useContext } from 'react';

const OffersContext = createContext();

export const useOffers = () => useContext(OffersContext);

export const OffersProvider = ({ children }) => {
  const [params, setParams] = useState({});

  return (
    <OffersContext.Provider value={{ params, setParams }}>
      {children}
    </OffersContext.Provider>
  );
};