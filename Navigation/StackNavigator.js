import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from '../Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}
    
          drawerContent={(props) => <DrawerContent {...props} /> }
          >
      <Drawer.Screen name="Jobs" component={Jobs} />
    </Drawer.Navigator>
  );
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
