import React, { createContext, useContext, useState, useEffect } from 'react';
//API
import { getData } from '../services/api';

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined);
    const [response, setResponse] = useState();

    useEffect(() => {
      const fetchApi = async () => {
        setResponse(await getData());
      };
      fetchApi();
    }, []);

    
  return (
    <StateContext.Provider value={{ 
      activeMenu, 
      setActiveMenu,
      screenSize,
      setScreenSize,
      response }}>
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);