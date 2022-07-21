import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import AppHeader from '../Components/AppHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Jobs = ({navigation}) => {
  return (
    <SafeAreaView style={s.Container}>
    <View>
      <AppHeader navigation={[navigation, 'Jobs']} />
      <View style={s.Header}>
        <View style={s.SearchBox}>
          <TextInput style={s.InputBox} placeholder="Search For Jobs" placeholderTextColor="grey" />
          <TouchableOpacity style={s.SearchButton}>
            <FontAwesome name={'search'} color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={s.LikeBox}>
          <TouchableOpacity style={s.LikeButton}>
            <FontAwesome name={'heart'} color={'grey'} size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  Container:{
    // flex: 1,
    // padding:10
  },
  Header: {
    marginVertical: 20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"#fff",
    paddingVertical:20
  },
  SearchBox: {
    position: 'relative',
    width: '80%',
    overflow:"hidden"
  },
  InputBox: {
    borderWidth: 1,
    borderColor:"lightgrey",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5
  },
  LikeButton: {
    borderWidth:1,
    borderColor:'lightgrey',
    borderRadius:100,
    padding:8
  },
  SearchButton:{
    position:"absolute",
    backgroundColor:"#0CAA00",
    top:0,
    right:0,
    width:50,
    height:39,
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    borderTopRightRadius:5,
    borderBottomRightRadius:5
  }
});

export default Jobs;
