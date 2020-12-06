import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as views from '../views';

const Stack = createStackNavigator();

const allViews: { [key: string]: any } = {
  ...views,
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: { headerShown: false },
    component: allViews[name],
  };
}

const viewsNames = Object.keys(views);

export default function Routes() {
  return (
    <Stack.Navigator>
      {viewsNames.map(viewName => (
        <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
      ))}
    </Stack.Navigator>
  );
}
