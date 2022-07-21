import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppHeader from '../Components/AppHeader';

const About = ({navigation}) => {
  return (
    <View>
      <AppHeader navigation={[navigation, 'About']} />
      <Text>This is the about screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default About;
