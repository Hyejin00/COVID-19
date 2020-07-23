import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';

const HomeStack = createStackNavigator();

export default function MapNavigator({ navigation, route }) {

  const dispatch = useDispatch();
  useEffect(() => {
  })

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MapScreen"
        component={NewsScreen}
        options={{ 
          headerTitle: 'Map',
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
            )}
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