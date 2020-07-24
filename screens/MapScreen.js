import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';

import MapHeader from '../components/map/MapHeader';
import MapCardView from '../components/map/MapCardView';
import MapSVG from '../components/map/MapSVG';
import colors from '../constants/Colors';

export default function MapScreen(props) {
  const stateColors = {
    seoul: '#fff',
    incheon: '#fff',
    gyounggi: '#fff',
    gangwon: '#fff',
    chungbuk: '#fff',
    chungnam: '#fff',
    gyoungbuk: '#fff',
    daegu: '#fff',
    sejong: '#fff',
    daejeon: '#fff',
    jeonbuk: '#fff',
    ulsan: '#fff',
    gyoungnam: '#fff',
    busan: '#fff',
    gwangju: '#fff',
    jeonnam: '#fff',
    jeju: '#fff',
    }
  return (
    <LinearGradient
			style={styles.container}
			colors={[colors.map.maxColor,colors.map.minColor]}
		>
			<MapHeader/>
      <MapCardView/>
      <MapSVG/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
	container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  svgContainer:{
    alignItems: 'center'
  }
});