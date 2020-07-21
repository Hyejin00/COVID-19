import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

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
                color='black'
                style={{marginLeft:20}}/>
            </TouchableWithoutFeedback>
            )},
            headerStyle:{
              backgroundColor: "#83a4d4",
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
                      name="map" size={24} 
                      color="black" 
                      style={{margin:20, marginRight:3}}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={()=>{}}
                  >
                    <Entypo 
                      name="plus"
                      size={24} 
                      color="black" 
                      style={{margin:20}}
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