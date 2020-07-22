import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function AreaItem({ name }){
  return(
    <View style = {styles.item_container}>
      <Text style = {styles.name_font}>{name}</Text>
      <FontAwesome name="trash-o" size={24} color="#C0392B" />
    </View>
  );
}

const styles = StyleSheet.create({
  item_container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    paddingEnd:20,
    borderBottomWidth:.5,
    borderColor: '#ccc',
    backgroundColor: '#FBFCFC',
  },
  name_font:{
    fontSize: 20,
  }
})
