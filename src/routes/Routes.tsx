import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as views from '../views';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={views.Home} />
  </Stack.Navigator>
);

export default Routes;
