import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator >
    </NavigationContainer>
  );
};


export default Routes;