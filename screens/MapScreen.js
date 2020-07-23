import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';

import MapHeader from '../components/map/MapHeader';
import colors from '../constants/Colors'

<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_aX-q10zRK9ryYyWMIjVKaol8F63Erek&zoom=14"
  type="text/javascript"
/>

export default function MapScreen(){
  const myAreaData = useSelector(state => state.myAreaData);

  return(
    <LinearGradient
			style={styles.container}
			colors={[colors.map.maxColor,colors.map.minColor]}
		>
			<MapHeader/>
      <View style={styles.mapview}>
        <MapView style={styles.mapStyle} />
      </View>
		</LinearGradient>
  );
}

const styles = StyleSheet.create({
	container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  mapview: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});