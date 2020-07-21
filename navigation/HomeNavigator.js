import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native';

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
            backgroundColor: null,
            elevation: 0,
            shadowOpacity: 0,
          }
      }}
      />
    </HomeStack.Navigator>
  );
}