import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

export default function MyLoading(){
  return(
    <View style={styles.container}>
      <Text style={styles.loading}>관심목록 불러오는 중...</Text>
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