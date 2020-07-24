import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
      <View style={styles.mapview}>
        <MapView 
          style={styles.mapStyle}
          scrollEnabled={false}
          zoomEnabled={false}
          moveOnMarkerPress={false}
          initialRegion={{
            latitude: 35.4,
            longitude: 127.8,
            latitudeDelta: 5,
            longitudeDelta: 5
          }} 
        >
          <Marker
            title='서울'
            description={"안녕 난 서울이야~"}
            coordinate={{
              latitude: 37.5642135,
              longitude: 127.0016985
            }}
          />
          <Marker
            title='경기'
            coordinate={{
              latitude: 37.897100,
              longitude: 127.150334
            }}
          />
           <Marker
            title='강원'
            coordinate={{
              latitude: 37.810724,
              longitude: 128.306424
            }}
          />
          <Marker
            title='인천'
            coordinate={{
              latitude: 37.455983,
              longitude: 126.692074
            }}
          />
          <Marker
            title='충북'
            coordinate={{
              latitude: 36.997731,
              longitude: 127.698314
            }}
          />
          <Marker
            title='대전'
            coordinate={{
              latitude: 36.338966,
              longitude: 127.394956
            }}
          />
          <Marker
            title='세종'
            coordinate={{
              latitude: 36.561683,
              longitude: 127.256361
            }}
          />
          <Marker
            title='충남'
            coordinate={{
              latitude: 36.717639,
              longitude: 126.797042
            }}
          />
          <Marker
            title='전북'
            coordinate={{
              latitude: 35.713506,
              longitude: 127.150068
            }}
          />
          <Marker
            title='광주'
            coordinate={{
              latitude: 35.160435,
              longitude: 126.832109
            }}
          />
          <Marker
            title='전남'
            coordinate={{
              latitude: 34.870603,
              longitude: 126.990984
            }}
          />
          <Marker
            title='제주'
            coordinate={{
              latitude: 33.380933,
              longitude: 126.546734
            }}
          />
          <Marker
            title='경남'
            coordinate={{
              latitude: 35.455266,
              longitude: 128.215065
            }}
          />
          <Marker
            title='부산'
            coordinate={{
              latitude: 35.161740,
              longitude: 129.043971
            }}
          />
          <Marker
            title='울산'
            coordinate={{
              latitude: 35.547750,
              longitude: 129.250494
            }}
          />
          <Marker
            title='대구'
            coordinate={{
              latitude: 35.831567,
              longitude: 128.559324
            }}
          />
          <Marker
            title='경북'
            coordinate={{
              latitude: 36.296001,
              longitude: 128.890377
            }}
          />
           <Marker
            title='검역'
            coordinate={{
              latitude: 34.418866,
              longitude: 129.154003
            }}
          />
        </MapView>
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
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  markerStyle: {
    
  }
});