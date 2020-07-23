import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';

import MapHeader from '../components/map/MapHeader';

export default function MapScreen(){
  const myAreaData = useSelector(state => state.myAreaData);

  return(
    <LinearGradient
			style={styles.container}
			colors={["#80B918","#CDF08D"]}
		>
			<MapHeader/>
		</LinearGradient>
  );
}

const styles = StyleSheet.create({
	container:{
    flex:1,
  },
});