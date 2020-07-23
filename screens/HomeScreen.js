import React, { useState , useRef, useEffect } from 'react';
import { Animated, StyleSheet, RefreshControl, ScrollView, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import colors from '../constants/Colors'
import MyAreaStatus from '../components/home/MyAreaStatus';
import CountryStatus from '../components/home/CountryStatus';
import Header from '../components/home/Header';
import { fetchCOVIDCountry, fetchCOVIDArea } from '../actions';

function getColor(incDec){
  if(incDec<=0){
    return [colors.good.maxColor,colors.good.minColor]
  }else{
    return [colors.bad.maxColor,colors.bad.minColor]
  }
}

export default function HomeScreen(){
  const isLoading = useSelector(state => state.loading);

  const scrollX = useRef(new Animated.Value(0)).current;

  const myAreaData = useSelector(state => state.myAreaData);

  const { width: windowWidth } = useWindowDimensions();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async() =>{
    dispatch(fetchCOVIDCountry());
    dispatch(fetchCOVIDArea());
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
          duration: 2000,
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
    <Animated.ScrollView
        horizontal={true}
        style={styles.scrollViewStyle}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                x: scrollX
              },
            },
          }],
          { useNativeDriver: false }
          )}
        scrollEventThrottle={1}
      >
        {myAreaData.map((area, areaIndex) => {
            return (
              <LinearGradient
                style={styles.container}
                // colors={["#83a4d4","#b6fbff"]}
                colors={getColor(area.incDec)}
                key={areaIndex}
              >
              <ScrollView
                contentContainerStyle={styles.scroll_container}
                refreshControl = {<RefreshControl refreshing={isLoading} onRefresh={ onRefresh }/>}
              >
                <Header/>
                <FadeInView>
                  <MyAreaStatus area={area}/>
                  <View style={styles.indicatorContainer}>
                    {myAreaData.map((area, areaIndex) => {
                      const width = scrollX.interpolate({
                        inputRange: [
                          windowWidth * (areaIndex - 1),
                          windowWidth * areaIndex,
                          windowWidth * (areaIndex + 1)
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: "clamp"
                      });
                      return (
                        <Animated.View
                          key={areaIndex}
                          style={[styles.normalDot, { width }]}
                        />
                      );
                    })}
                  </View>
                </FadeInView>
                <CountryStatus color={getColor(area.incDec)}/>
              </ScrollView>
            </LinearGradient>
            );
          })}
      
      </Animated.ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scroll_container:{
    flex:1
  },
  container:{
    flex:1,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})
