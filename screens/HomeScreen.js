import React, { useState , useRef, useEffect } from 'react';
import { Animated, StyleSheet, RefreshControl, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';

import colors from '../constants/Colors'
import MyAreaStatus from '../components/home/MyAreaStatus';
import CountryStatus from '../components/home/CountryStatus';
import { fetchCOVIDCountry, fetchCOVIDArea } from '../actions';
export default function HomeScreen(){

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async() =>{
    setIsRefreshing(true);
    setTimeout(function() { console.log('loading..')}, 3000);
    setIsRefreshing(false);
  }
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchCOVIDCountry());
    dispatch(fetchCOVIDArea());
  },[])

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
  

  return (
    <ScrollView
      contentContainerStyle={styles.scroll_container}
      refreshControl = {<RefreshControl refreshing={isRefreshing} onRefresh={ onRefresh }/>}
    >
      <LinearGradient
        style={styles.container}
        // colors={["#83a4d4","#b6fbff"]}
        colors={[colors.light.maxColor,colors.light.minColor]}
      >
        
        <FadeInView>
          <MyAreaStatus/>
        </FadeInView>
        <CountryStatus/>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll_container:{
    flex:1
  },
  container:{
    flex:1,
  },
})
