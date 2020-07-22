import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { fetchCOVIDNews } from '../actions/index';
import { useDispatch } from 'react-redux';

const HomeStack = createStackNavigator();

export default function NewsNavigator({ navigation, route }) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCOVIDNews());
  })

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ 
          headerTitle: 'News',
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