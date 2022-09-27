import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login/Login";

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }} initialRouteName={'Login'}>
    <AuthStack.Screen name='Login' component={Login}/>
  </AuthStack.Navigator>
);

export default AuthNavigation;
