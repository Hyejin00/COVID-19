import React, { useRef, useEffect } from 'react';
import {  Animated, StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

function Circle({data}){
  const list=[]
  console.log(data)
  for(var i=0; i<data; i++){
    console.log(i)
    list.push(i)
  }
  console.log(list)
  return(
    list.map((l, i) => (
      <View style={styles.circle} key={i}>
        <AntDesign name="frowno" size={37} color="black" style={{ margin: 3 }}/>
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
        duration: 5000,
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
  const confirmedNum = 0;

  return(
    <FadeInView>
      <View style={styles.main}>

        {/* 지역 이름 */}
        <Text style={styles.areaName}>
            서울
        </Text>
        {/* 지역 확진자 추가 정보 */}
        <View>
        {confirmedNum>0 ? 
          <Text style={styles.areaBad}>
            + {confirmedNum}
          </Text> :
            <Text style={styles.areaGood}>
              오늘 확진자는 없습니다!
            </Text> 
          }
        </View>
        <View style={styles.circles}>
        {confirmedNum>0 ? 
          <Circle data={confirmedNum}/> :
          <Entypo name="emoji-happy" size={120} color="black" />
        }
        </View>
        
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
    main: {
      height: 400,
      alignItems: 'center'
    },
    areaName: {
        fontSize: 40,
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontWeight: '600'
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
      color: '#9d0208',
      fontWeight: '600',
      marginBottom: 20
    },
    areaGood: {
      fontSize: 30,
      fontWeight: '600',
      marginBottom: 20
    }
})
