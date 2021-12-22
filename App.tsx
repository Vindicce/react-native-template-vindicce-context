import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Store } from './src/components';
import Routes from './src/routes/Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <Store>
      <Routes />
    </Store>
  </NavigationContainer>
);

export default App;
