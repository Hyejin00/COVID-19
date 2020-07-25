import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons'; 

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
      <Text style={styles.areaTitle}>{info["지역이름"]} 확진자 현황</Text>
      <MapSVG/>
      <Text style={styles.desc}><Feather name="info" size={17} color="#6D6D6D"/> 지역을 클릭하면 디테일한 데이터를 확인할 수 있어요!</Text>
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
  },
  desc:{
    textAlign: 'center',
    color: '#6D6D6D',
    marginRight: 10,
    marginTop: 4,
  }
});