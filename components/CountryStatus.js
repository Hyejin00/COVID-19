import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CountryStatus(){

  return(
    <View style={styles.main}>
        <Text>
            여기에는 국가 정보를 카드뷰로!
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        height: 300
    }
})
