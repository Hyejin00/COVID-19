import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function Circle({data}){
  const list=[]
  console.log(data)
  for(let i; i<data; i++){
    list.append(i)
  }
  return(
    list.map((l, i) => (
      <View style={styles.circle} key={i}>
        <AntDesign name="frowno" size={40} color="black" style={{ margin: 3 }}/>
      </View>
    ))
  );
}

export default function MyAreaStatus(){

  return(
    <View style={styles.main}>

      {/* 지역 이름 */}
      <Text style={styles.areaName}>
          서울
      </Text>
      <View style={styles.circles}>
        <Circle data={9}/>
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
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '80%',
    },
    circle: {
      
    }
})
