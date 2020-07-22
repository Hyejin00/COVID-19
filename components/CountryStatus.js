import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

import colors from '../constants/Colors'

export default function CountryStatus(){

  return(
    <View style={styles.container}>
        <Card 
          title="국내 확진자 현황"
          titleStyle={{color: 'white'}}
          containerStyle={{backgroundColor: colors.light.maxColor, borderRadius: 12, 
                      borderColor:  colors.light.maxColor, height: '60%', marginTop: 40}}>
        {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            This is a card from the react-native-elements
          </Text>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    paragraph: {
      color: 'white'
    }
})
