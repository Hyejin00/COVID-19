import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

export default function Loading(){
  return(
    <View style={styles.container}>
      <Text style={styles.loading}>위치 찾는 중...</Text>
      <ActivityIndicator size="large" color="purple" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent:'center',
    alignItems: 'center',
    backgroundColor: '#eee5e8'
  },
  loading: {
    color: 'purple',
    fontSize: 20,
    fontWeight: '200',
    marginBottom: 20
  }
});