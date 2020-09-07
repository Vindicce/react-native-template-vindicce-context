import React from 'react';

import { InitialProvider, ModalProvider } from '../../hooks';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ModalProvider>
      <InitialProvider>{children}</InitialProvider>
    </ModalProvider>
  );
};

export default GlobalProvider;
