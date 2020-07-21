import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MyAreaStatus(){

  return(
    <View style={styles.main}>
        <Text>
            여기에는 내 지역 정보를 카드뷰로!
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        height: '300%'
    }
})
