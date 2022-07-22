import React from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const Main = () => {
  const data = [
    {
      title: 'Aenean leo',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];
  const Slider = ({item}) => {
    return (
      <View style={s.slide}>
        <Text style={s.title}>{item.title}</Text>
        <Image style={s.SliderImage} source={{uri: item.imgUrl}} />
        <Text style={s.text}>{item.body}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={s.MainLogoContainer}>
        <Image
          style={s.MainLogo}
          source={require('../Assets/Images/Logo.png')}
        />
      </View>
      <View style={s.SliderContainer}>
        <AppIntroSlider renderItem={Slider} data={data} />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  MainLogoContainer: {
    height: 50,
    width: '100%',
    overflow: 'hidden',
    marginTop: 80,
    marginBottom: 30,
  },
  MainLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontSize: 40,
    margin: 20,
  },
  SliderContainer: {
    height: '50%',
    width: '100%',
    overflow: 'hidden',
    marginTop: 30,
    marginBottom: 30,
  },
  slide: {
    // display:'flex',
    height: 300,
    width: '100%',
  },
  SliderImage: {
    height: 350,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default Main;
