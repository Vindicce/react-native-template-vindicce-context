import React from 'react';
import { InitialProvider, ModalProvider } from '../../hooks';

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ModalProvider>
      <InitialProvider>{children}</InitialProvider>
    </ModalProvider>
  );
};
