import React, { createContext, useContext } from 'react';
import { IInitialContext } from '../utils/interfaces';

export const InitialContext = createContext<IInitialContext>(
  {} as IInitialContext
);

export const InitialProvider: React.FC = ({ children }) => {
  const value = {
    initial: 'test',
  };

  return (
    <InitialContext.Provider value={value}>{children}</InitialContext.Provider>
  );
};

export function useInitial(): IInitialContext {
  return useContext(InitialContext);
}
