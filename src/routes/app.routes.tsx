import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const AppStack = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Settings" component={Detail} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;