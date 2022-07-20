import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator} from './StackNavigator';
import About from '../Screens/About';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
   }}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'search'} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Jobs"
        component={MainStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome5 name={'file-signature'} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Proposals"
        component={About}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'file-text'} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Contracts"
        component={MainStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'envelope'} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Messages"
        component={MainStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'bell'} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Alerts"
        component={MainStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
