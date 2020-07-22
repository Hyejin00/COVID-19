import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="News" component={NewsNavigator} />
      </Drawer.Navigator>
    </Provider>
  );
}
