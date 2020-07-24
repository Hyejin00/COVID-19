import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

function RootNavigator() {
  return (
    <Provider store={store}>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContentOptions  ={{
          activeTintColor: '#652f79', //글자색
          activeBackgroundColor: '#eee5e8' //바탕색 
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeNavigator} 
          options={{ 
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="home" size={size} color={focused ? "#652f79" : "#aaa"}/>
            ) 
          }}
        />
        <Drawer.Screen 
          name="News" 
          component={NewsNavigator} 
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="newspaper-o" size={size} color={focused ? "#652f79" : "#aaa"}/>
            ) 
          }}  
        />
      </Drawer.Navigator>
    </Provider>
  );
}
