import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const x = 3

function Circle(x){
  const list=[1,2,3,4,5,6,7,8,9,0]
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
      <Text style={styles.areaName}>
          서울
      </Text>
      <View style={styles.circles}>
        <Circle/>
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
