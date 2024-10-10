import React, { createContext, useState, useContext } from 'react';

const OffersContext = createContext();

export const useOffers = () => useContext(OffersContext);

export const OffersProvider = ({ children }) => {
  const [params, setParams] = useState({});
  const [selectedOfferId, setSelectedOfferId] = useState(null);

  return (
    <OffersContext.Provider value={{ params, setParams, selectedOfferId, setSelectedOfferId }}>
      {children}
    </OffersContext.Provider>
  );
};