import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';

import MapHeader from '../components/map/MapHeader';
import colors from '../constants/Colors'

export default function MapScreen(){
  const myAreaData = useSelector(state => state.myAreaData);

  return(
    <LinearGradient
			style={styles.container}
			colors={[colors.map.maxColor,colors.map.minColor]}
		>
			<MapHeader/>
		</LinearGradient>
  );
}

const styles = StyleSheet.create({
	container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
});