import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./DrawerContent";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import UnitList from "../screens/DocumentNet/UnitList";
import Notification from "../screens/Notification/Notification";
import StaffSearch from "../screens/Staff/StaffSearch";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AppStack = createNativeStackNavigator();
const DocumentNetStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} /> }

    screenOptions={{
        drawerLabelStyle: {
            marginLeft: -20,
        },
        headerShown: false,

    }}
    initialRouteName="Home">
    <Drawer.Screen
      name="Anasayfa"
      component={Home}
      options={{drawerIcon: ({color, size}) => (
        <Icon
          name="home" size={size} color={color}
        />
      )}}/>
    <Drawer.Screen
      name='Profilim'
      component={Profile}
      options={{drawerIcon: ({color, size}) => (
          <Icon
            name="account" size={size} color={color}
          />
        )}}
    />
  </Drawer.Navigator>
)

const DocumentNetNavigation = () => (
  <DocumentNetStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <DocumentNetStack.Screen name='UnitList' component={UnitList}/>
  </DocumentNetStack.Navigator>
);

const AppNavigation = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name='Home' component={DrawerRoutes}/>
    <AppStack.Screen name='UnitList' component={DocumentNetNavigation}/>
    <AppStack.Screen name='Notification' component={Notification}/>
    <AppStack.Screen name='StaffSearch' component={StaffSearch}/>

  </AppStack.Navigator>
);

export default AppNavigation;
