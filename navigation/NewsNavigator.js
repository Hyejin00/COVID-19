import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../screens/NewsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const HomeStack = createStackNavigator();

export default function NewsNavigator({ navigation, route }) {
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
            )},
            headerStyle:{
              backgroundColor: null,
              elevation: 0,
              shadowOpacity: 0,
            },
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