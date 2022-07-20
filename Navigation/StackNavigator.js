import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../Screens/About';
import Jobs from '../Screens/Home';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Jobs" component={Jobs} />
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
