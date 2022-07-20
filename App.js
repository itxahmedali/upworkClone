import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log("splashscreen hide");
  }, []);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;