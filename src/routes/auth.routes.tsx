import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator headerMode={"none"}>
      <AuthStack.Screen name="Signin" component={Signin} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;