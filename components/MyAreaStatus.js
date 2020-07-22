import React, { useRef, useEffect } from 'react';
import {  Animated, StyleSheet, View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

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

export default function MyAreaStatus(){

  // 현재 확진자 수
  const confirmedNum = 20;

  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  
  // 관심목록
  const MyArea = [
                  {
                    areaName:'경기도',
                    confirmedNum: 20,
                  },
                  {
                    areaName:'서울',
                    confirmedNum: 25,
                  },
                  {
                    areaName:'부안',
                    confirmedNum: 0,
                  },
                ];

  return(
    <FadeInView>
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
          // true로 바꾸면 워닝 사라지지만 dot기능 사라짐
          { useNativeDriver: false }
          )}
        scrollEventThrottle={1}
      >
        {MyArea.map((area, areaIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 420, alignItems:'center' }}
                key={areaIndex}
              >
                  {/* 지역 이름 */}
                  <Text style={styles.areaName}>
                      {area.areaName}
                  </Text>
                  {/* 지역 확진자 추가 정보 */}
                  <View>
                  {area.confirmedNum>0 ? 
                    <Text style={styles.areaBad}>
                      <Text style={{fontSize:20}}>추가 확진자</Text> {area.confirmedNum} <Text style={{fontSize:20}}>명</Text>
                    </Text> :
                      <Text style={styles.areaGood}>
                        오늘 확진자는 없습니다!
                      </Text> 
                    }
                  </View>
                  <View style={styles.circles}>
                  {area.confirmedNum>0 ? 
                    <Circle data={area.confirmedNum}/> :
                    <Entypo name="emoji-happy" size={120} color="white" />
                  }
                  </View>
              </View>
            );
          })}
      
      </Animated.ScrollView>
      <View style={styles.indicatorContainer}>
          {MyArea.map((area, areaIndex) => {
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
