import * as React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../constants/Colors'
import MyAreaStatus from '../components/MyAreaStatus';
import CountryStatus from '../components/CountryStatus';


export default function HomeScreen(){
  

  return (
    <LinearGradient
      style={styles.container}
      // colors={["#83a4d4","#b6fbff"]}
      colors={[colors.light.maxColor,colors.light.minColor]}
    >
      <MyAreaStatus/>
      <CountryStatus/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})
