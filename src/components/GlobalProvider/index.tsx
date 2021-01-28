import React from 'react';
import { InitialProvider, ModalProvider, PlanningsProvider } from '../../hooks';

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ModalProvider>
      <PlanningsProvider>
        <InitialProvider>{children}</InitialProvider>
      </PlanningsProvider>
    </ModalProvider>
  );
};
