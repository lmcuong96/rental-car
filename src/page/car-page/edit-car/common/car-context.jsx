import React, { createContext, useContext } from 'react';

const CarContext = createContext();

export const CarProvider = ({ value, children }) => (
    <CarContext.Provider value={value}>
        {children}
    </CarContext.Provider>
);

export const useCar = () => useContext(CarContext);
