import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

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

export default function MyAreaStatus(){

  // 현재 확진자 수
  const confirmedNum = 23;

  return(
    <View style={styles.main}>

      {/* 지역 이름 */}
      <Text style={styles.areaName}>
          서울
      </Text>
      <View style={styles.circles}>
        {/* 유동적으로 수 바꾸기! */}
        <Circle data={confirmedNum}/>
      </View>
      {/* 지역 확진자 추가 정보 */}
      <View>
      <Text style={styles.areaPlus}>
          +10
      </Text>
      </View>
    </View>
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
        marginBottom: 30,
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
      
    }
})
