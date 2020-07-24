import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { fetchMyAreaData } from '../actions/index';
import { useDispatch } from 'react-redux';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { StyleSheet, TouchableWithoutFeedback, Text,Alert } from 'react-native';

import MapScreen from '../screens/MapScreen';
import PlusScreen from '../screens/PlusScreen';
import EditScreen from '../screens/EditScreen';

const HomeStack = createStackNavigator();

export default function HomeNavigator({ navigation, route }) {

  const dispatch = useDispatch();

  const getLocation = async() => {
    try {
      let { status } = await Permissions.getAsync(Permissions.LOCATION);
      if(status !== 'granted'){
        Alert.alert('권한 설정','현재 위치한 시/도의 확진자 수를 보여주기 위해 위치정보를 받고 있습니다. 위치 권한을 활성화해주세요.',[{
          text: 'OK',
          onPress: async ()=> {
            let { status } = await Location.requestPermissionsAsync();
            if( status !== 'granted'){
              dispatch(fetchMyAreaData(40.714224, -73.961452));
            }
          }
        }]);
      } else{
        const { coords:{latitude,longitude} } = await Location.getCurrentPositionAsync({});
        console.log('zz');
        dispatch(fetchMyAreaData(latitude, longitude));
      }
    } catch (error) {
      console.log(error);
      Alert.alert("위치를 찾을 수 없습니다", "위치가 켜져있는지 확인하시오.");
    }
  }

  useEffect(()=> {
    getLocation();
  });

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
        />
      <HomeStack.Screen
        name="PlusScreen"
        component={PlusScreen}
        options={{ 
          headerTitle: '관심지역',
          headerRight: () =>{
            return(
              <TouchableWithoutFeedback
                onPress={()=>{
                  navigation.navigate('EditScreen')
                }}
              >
                <Text style = {styles.fontRight}>추가</Text>
              </TouchableWithoutFeedback>
            )}
          }
        }
        />
      <HomeStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={
          { 
            headerTitle: '지역선택',
          }
        }
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconRight: {
    flexDirection: 'row',
    margin: 5
  },
  fontRight:{
    fontSize: 18,
    color:'#3498DB',
    marginRight: 19
  }
})