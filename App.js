import React, {useEffect} from 'react';
import {StyleSheet,} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import BottomTabNavigator from './Navigation/BottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Jobs from './Screens/Jobs';
import DrawerContent from './Navigation/DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </Stack.Navigator>
    );
  };
  useEffect(() => {
    SplashScreen.hide();
    console.log('splashscreen hide');
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="MainStackNavigator"
          component={MainStackNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profilePicContainer: {
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: 10,
    marginVertical: 10,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
});

export default App;
