import * as React from 'react';
import { InitialProvider, ModalProvider } from '../../hooks';
import { ThemeProvider } from '../../styles';

export const GlobalProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <ModalProvider>
      <InitialProvider>{children}</InitialProvider>
    </ModalProvider>
  </ThemeProvider>
);
