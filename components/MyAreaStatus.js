import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function circle(){
  return(
     <View>
       
     </View> 
  );
}

export default function MyAreaStatus(){

  return(
    <View style={styles.main}>
        <Text style={styles.areaName}>
            서울
        </Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
    },
    areaName: {
        fontSize: 40,
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '600'
    },
})
