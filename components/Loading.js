import React from 'react';
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading(){
  return(
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent:'center'
  },
});