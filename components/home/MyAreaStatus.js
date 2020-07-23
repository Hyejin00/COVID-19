import React, { useRef } from 'react';
import {  Animated, StyleSheet, View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../actions';

function Circle({data}){
  const list = new Array(data).fill('0');
  var size = 37;
  if(data==1){
    size = 120;
  }else if(data<=5){
    size = 60;
  }else if(data>20){
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

  const curPage = useSelector(state => state.curPage);

  return(
    <View
      style={{ 
        width: windowWidth, 
        height: 420, alignItems:'center' }}
    >
        <Text style={styles.areaName}>
            {area.gubun}
        </Text>
        <Text style={styles.dateTime}>
            기준 일시 : {area.stdDay}
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
        marginTop: 55,
        marginBottom: 10,
        fontWeight: '600',
        color: '#fff'
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
})
