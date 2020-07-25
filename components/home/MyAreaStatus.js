import React, { useRef } from 'react';
import {  Animated, StyleSheet, View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../actions';

function addComma(num) {
  num *= 1;
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

function Circle({data}){
  const list = new Array(data).fill('0');
  var size = 37;
  if(data==1){
    size = 120;
  }else if(data<=5){
    size = 60;
  }else if(data>20){
    size = 30;
  }else{
    size = 20;
  }
  return(
    list.map((l, i) => (
      <View style={styles.circle} key={i}>
        <AntDesign name="frowno" size={size} color="white" style={{ margin: 3 }}/>
      </View>
    ))
  );
}

export default function MyAreaStatus({area}){
  
  const { width: windowWidth } = useWindowDimensions();

  return(
    <View
      style={{ 
        width: windowWidth, 
        height: 420, alignItems:'center' }}
    >
        <Text style={styles.areaName}>
          {area["지역이름"]}
        </Text>
        {area["전일대비"]>0 ? 
          <Text style={styles.areaBad}>
            <Text style={{fontSize:20}}>추가 확진자</Text> {area["전일대비"]} <Text style={{fontSize:20}}>명</Text>
          </Text> :
          <Text style={styles.areaGood}>
            오늘 확진자는 없습니다!
          </Text> 
          }
        <Text style={styles.defCnt}> (누적 {addComma(area["확진자수"])} 명) </Text>
        <View style={styles.circles}>
        {area["전일대비"]>0 ? 
          <Circle data={area["전일대비"]}/> :
          <Entypo name="emoji-happy" size={120} color="white" />
        }
        </View>
        <Text style={styles.dateTime}>
          Update: {area["업데이트날짜"]}
        </Text>
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
      marginBottom: 10,
      marginTop: 10,
      fontWeight: '600',
      marginTop: 55,
      color: '#fff',
    },
    dateTime: {
      fontSize: 18,
      width: '100%',
      textAlign: 'center',
      // marginTop: 60,
      marginBottom: 10,
      fontWeight: '300',
      color: '#fff'
    },
    circles: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '80%',
      marginTop: 20
    },
    circle: {
      
    },
    areaBad: {
      fontSize: 40,
      color: '#fff',
      // color: '#9d0208',
      fontWeight: '600',
    },
    areaGood: {
      fontSize: 27,
      color: '#fff',
      fontWeight: '600',
      marginTop: 20
    },
    defCnt: {
      fontSize:17, 
      marginBottom: 10,
      color:'white',
    }
})
