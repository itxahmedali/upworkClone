import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../Screens/About';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Jobs from '../Screens/Jobs';
import { SafeAreaView } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      labelStyle: {
        marginBottom: 10,
      },
    }}
    screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'search'} style={{marginTop:5}} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Jobs"
        component={Jobs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome5 name={'file-signature'} style={{marginTop:5}} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Proposals"
        component={About}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'file-text'} style={{marginTop:5}} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Contracts"
        component={Jobs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'envelope'} style={{marginTop:5}} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Messages"
        component={Jobs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <FontAwesome name={'bell'} style={{marginTop:5}} color={focused ? 'green' : "grey"} size={20} />
          ),
        }}
        name="Alerts"
        component={Jobs}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
