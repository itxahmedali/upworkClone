import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DrawerContent = () => {
  const [drop, setDrop] = useState(true);
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <TouchableOpacity
          style={[
            styles.ProfileDropButton,
            drop
              ? {borderBottomColor: 'lightgrey', borderBottomWidth: 1}
              : null,
          ]}
          onPress={() => {
            setDrop(!drop);
          }}>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              source={require('../Assets/Images/Profile2.jpg')}
            />
          </View>
          <View style={styles.ProfileHeadTextContainer}>
            <Text style={styles.ProfileHeadText}>Ahmed Ali Rajput</Text>
            <Text style={styles.ProfileHeadText}>Freelancer</Text>
          </View>
          <FontAwesome5
            style={styles.DropIcon}
            name={drop ? 'chevron-down' : 'chevron-up'}
            color={'grey'}
            size={15}
          />
        </TouchableOpacity>
        {drop ? (
          <View>
            <View style={styles.DrawerButtonSection}>
              <TouchableOpacity style={styles.DrawerButton}>
                <FontAwesome5
                  style={styles.DrawerButtonIcon}
                  name={'user'}
                  solid
                  color={'grey'}
                  size={20}
                />
                <Text style={styles.blackColor}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.DrawerButton}>
                <FontAwesome
                  style={styles.DrawerButtonIcon}
                  name={'bar-chart-o'}
                  color={'grey'}
                  size={20}
                />
                <Text style={styles.blackColor}>My Stats</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.DrawerButton}>
                <FontAwesome
                  style={styles.DrawerButtonIcon}
                  name={'pie-chart'}
                  color={'grey'}
                  size={20}
                />
                <Text style={styles.blackColor}>Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.DrawerButton,
                  {justifyContent: 'space-between'},
                ]}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <FontAwesome5
                    style={styles.DrawerButtonIcon}
                    name={'hammer'}
                    color={'grey'}
                    size={20}
                  />
                  <Text style={styles.blackColor}>Disputes</Text>
                </View>
                <FontAwesome5
                  name={'share-square'}
                  color={'grey'}
                  size={15}
                  solid
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.DrawerButton}>
                <Ionicons
                  style={styles.DrawerButtonIcon}
                  name={'md-settings-sharp'}
                  color={'grey'}
                  size={20}
                />
                <Text style={styles.blackColor}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.DrawerButton}>
                <FontAwesome
                  style={styles.DrawerButtonIcon}
                  name={'question-circle'}
                  color={'grey'}
                  size={20}
                />
                <Text style={styles.blackColor}>Help & Supoport</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.DrawerButton}>
              <FontAwesome
                style={styles.DrawerButtonIcon}
                name={'power-off'}
                color={'grey'}
                size={20}
              />
              <Text style={styles.blackColor}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Text style={[styles.VersionText, styles.blackColor]}>Version 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileDropButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 20,
  },
  profilePicContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    marginHorizontal: 15,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  ProfileHeadText: {
    fontSize: 12,
    marginVertical: 2,
    color: '#000',
  },
  DropIcon: {
    position: 'absolute',
    top: 18,
    right: 10,
  },
  DrawerButton: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 15,
  },
  DrawerButtonIcon: {
    marginRight: 20,
  },
  DrawerButtonSection: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  VersionText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 30,
  },
  blackColor:{
    color:"#000"
  }
});

export default DrawerContent;
