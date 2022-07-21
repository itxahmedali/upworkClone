import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
const AppHeader = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profilePicContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation[0].openDrawer()
          }}>
          <Image
            style={styles.profilePic}
            source={require('../Assets/Images/Profile2.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.Heading}>{navigation[1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderBottomColor:"lightgrey",
    borderBottomWidth:2,
    backgroundColor:'#fff'
  },
  Heading:{
    marginVertical:15,
    fontWeight:"600",
    fontSize:18,
    color:"#000"
  },
  profilePicContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
});

export default AppHeader;
