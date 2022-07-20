import React from 'react';
import Jobs from '../Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();


const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={Jobs} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
