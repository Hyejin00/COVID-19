import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';

import MapHeader from '../components/map/MapHeader';
import MapCardView from '../components/map/MapCardView';
import MapSVG from '../components/map/MapSVG';
import colors from '../constants/Colors';

export default function MapScreen(props) {
  const stateFocus = useSelector(state => state.stateFocus);
  const areaData = useSelector(state => state.areaData);
  const info = areaData[stateFocus];

  return (
    <LinearGradient
			style={styles.container}
			colors={[colors.map.maxColor,colors.map.minColor]}
		>
			<MapHeader/>
      <Text style={styles.areaTitle}>{info.gubun} 확진자 현황</Text>
      <MapSVG/>
      <MapCardView/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
	container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  areaTitle:{
    alignSelf: 'center',
    color: 'white',
    fontSize: 27,
    marginTop: 40,
    fontWeight: '600'
  },
  svgContainer:{
    alignItems: 'center'
  }
});