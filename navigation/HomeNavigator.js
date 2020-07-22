import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../constants/Colors'

const HomeStack = createStackNavigator();

export default function HomeNavigator({ navigation, route }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: '',
          headerLeft: () => 
          { 
            return (
            <TouchableWithoutFeedback
              onPress={()=>{navigation.openDrawer()}}>
                <Ionicons
                name= 'md-menu'
                size={24}
                color='white'
                style={{marginLeft:20}}/>
            </TouchableWithoutFeedback>
            )},
            headerStyle:{
              backgroundColor: colors.light.maxColor,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerRight: () =>{
              return(
                <View style={styles.iconRight}>
                  <TouchableWithoutFeedback
                    onPress={()=>{}}
                  >
                    <Entypo 
                      name="map" 
                      size={25} 
                      color="white" 
                      style={{margin:2, marginRight:18}}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={()=>{}}
                  >
                    <Entypo 
                      name="plus"
                      size={25} 
                      color="white" 
                      style={{margin:2, marginRight:18}}
                    />
                  </TouchableWithoutFeedback>
                </View>
              )
            }
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
})