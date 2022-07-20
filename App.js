import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './Navigation/BottomTabNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('splashscreen hide');
  }, []);
  return <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>;
};

const styles = StyleSheet.create({});

export default App;
