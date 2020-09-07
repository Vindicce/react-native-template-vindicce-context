import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider, ModalController } from './src/components';
import Routes from './src/routes/Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <GlobalProvider>
      <Routes />
      <ModalController />
    </GlobalProvider>
  </NavigationContainer>
);

export default App;
