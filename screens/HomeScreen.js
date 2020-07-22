import React, { useState } from 'react';
import { StyleSheet, RefreshControl, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../constants/Colors'
import MyAreaStatus from '../components/MyAreaStatus';
import CountryStatus from '../components/CountryStatus';


export default function HomeScreen(){

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async() =>{
    setIsRefreshing(true);
    setTimeout(function() { console.log('loading..')}, 3000);
    setIsRefreshing(false);
  }
  

  return (
    <ScrollView
      contentContainerStyle={styles.scroll_container}
      refreshControl = {<RefreshControl refreshing={isRefreshing} onRefresh={ onRefresh }/>}
    >
      <LinearGradient
        style={styles.container}
        // colors={["#83a4d4","#b6fbff"]}
        colors={[colors.light.maxColor,colors.light.minColor]}
      >
        <MyAreaStatus/>
        <CountryStatus/>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll_container:{
    flex:1
  },
  container:{
    flex:1,
  },
})
