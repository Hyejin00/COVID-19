import React, { useRef } from 'react';
import {  Animated, StyleSheet, View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../actions';

function Circle({data}){
  const list = new Array(data).fill('0');
  return(
    list.map((l, i) => (
      <View style={styles.circle} key={i}>
        <AntDesign name="frowno" size={37} color="white" style={{ margin: 3 }}/>
      </View>
    ))
  );
}

export default function MyAreaStatus(){

  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  
  const myAreaData = useSelector(state => state.myAreaData);

  const curPage = useSelector(state => state.curPage);

  return(
    <View>
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
              <View
                style={{ 
                  // width: 320, 
                  width: windowWidth, 
                  height: 420, alignItems:'center' }}
                key={areaIndex}
              >
                  <Text style={styles.areaName}>
                      {area.gubun}
                  </Text>
                  <View>
                  {area.incDec>0 ? 
                    <Text style={styles.areaBad}>
                      <Text style={{fontSize:20}}>추가 확진자</Text> {area.incDec} <Text style={{fontSize:20}}>명</Text>
                    </Text> :
                      <Text style={styles.areaGood}>
                        오늘 확진자는 없습니다!
                      </Text> 
                    }
                  </View>
                  <View style={styles.circles}>
                  {area.incDec>0 ? 
                    <Circle data={area.incDec}/> :
                    <Entypo name="emoji-happy" size={120} color="white" />
                  }
                  </View>
              </View>
            );
          })}
      
      </Animated.ScrollView>
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
      </View>
  );
}

const styles = StyleSheet.create({
    main: {
      height: 400,
      alignItems: 'center',
    },
    areaName: {
        fontSize: 40,
        width: '100%',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 10,
        fontWeight: '600',
        color: '#fff'
    },
    circles: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '80%',
    },
    circle: {
      
    },
    areaBad: {
      fontSize: 40,
      color: '#fff',
      // color: '#9d0208',
      fontWeight: '600',
      marginBottom: 20
    },
    areaGood: {
      fontSize: 30,
      color: '#fff',
      fontWeight: '600',
      marginBottom: 30,
      marginTop: 20
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
