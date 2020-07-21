import * as React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MyAreaStatus from '../components/MyAreaStatus';
import CountryStatus from '../components/CountryStatus';


export default function HomeScreen(){
  

  return (
    <LinearGradient
      style={styles.container}
      colors={["#83a4d4","#b6fbff"]}
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
