import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";

const AppStack = createNativeStackNavigator();

const Router = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack.Navigator initialRouteName={'AuthNavigation'}>
        <AppStack.Screen
          name={"AuthNavigation"}
          component={AuthNavigation}
          options={{headerShown: false, gestureEnabled: false}}/>
        <AppStack.Screen
          name={"AppNavigation"}
          component={AppNavigation}
          options={{headerShown: false, gestureEnabled: false}}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
