import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Store, ModalController } from './src/components';
import Routes from './src/routes/Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <Store>
      <Routes />
      <ModalController />
    </Store>
  </NavigationContainer>
);

export default App;
