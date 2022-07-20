import React, {useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './Navigation/BottomTabNavigator';
import ProfilePic from './Assets/Images/Profile.png';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Jobs from './Screens/Home';
import DrawerContent from './Navigation/DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
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
  useEffect(() => {
    SplashScreen.hide();
    console.log('splashscreen hide');
  }, []);
  return (
    <NavigationContainer>
      {/* <TouchableOpacity>
        <View style={styles.profilePicContainer}>
          <Image style={styles.profilePic} source={ProfilePic} />
        </View>
      </TouchableOpacity>
      <MainStackNavigator />
      <BottomTabNavigator /> */}
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
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
