import * as React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Hello Khalil.</Text>*/}
      {/*<Text style={styles.text}>Hello, this is my first application.</Text>*/}
      {/*<View style={styles.separator}/>*/}
      {/*<Image source={require('../assets/images/favicon.png')}/>*/}
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.image}>
        <Text style={styles.text}>Hello, this is my first application.</Text>
      </ImageBackground>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  text:{
    color: '#000000',
    marginLeft:50,
    marginTop:250,
    fontWeight:'bold',
    fontSize: 18
  }
});
