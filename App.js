import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons'; 

import HomeNavigator from './navigation/HomeNavigator';
import NewsNavigator from './navigation/NewsNavigator';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function DrawerHeader(props) {
  return(
    <View style={styles.container}>
      <View>
        <Image
          style={styles.drawerheader}
          source={require('./assets/덕분에.png')}
        />
        <DrawerItem
          label={() => <Text>메인화면</Text>}
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <FontAwesome name="home" size={24} color="#aaa"/>}
        />
        <DrawerItem
          label={() => <Text>코로나 뉴스</Text>}
          onPress={() => props.navigation.navigate('News')}
          icon={() => <FontAwesome name="newspaper-o" size={20} color="#aaa"/>}
        />
      </View>
      <Text style={styles.team}>Developed by 진지 0%</Text>
    </View>
  );
}

function RootNavigator() {
  return (
    <Provider store={store}>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent = {props => <DrawerHeader  {...props}/>}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeNavigator} 
        />
        <Drawer.Screen 
          name="News" 
          component={NewsNavigator}  
        />
      </Drawer.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  drawerheader: {
    marginTop: 25,
    marginBottom: 10,
    width: 'auto',
    height: 180
  },
  team: {
    textAlign: 'right',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    marginBottom: 20,
    color: '#ccc'
  },
  container:{
    height: '100%'
  }
})

// drawerStyle={{
//   backgroundColor: '#83a4d4'
// }}