import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function OptionItem({ name }){

  const [isSelected, setIsSelected] = useState(false);

  return(
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#D6EAF8"
      onPress={() => alert('Pressed!')}
    >
      <View style = {styles.item_container}>
        <Ionicons name="md-radio-button-off" size={24} color="black" />
        <Text style = {styles.name_font}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item_container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:20,
    paddingEnd:20,
    borderBottomWidth:.5,
    borderColor: '#ccc',
    backgroundColor: '#FBFCFC',
  },
  name_font:{
    fontSize: 20,
    marginStart: 13
  }
})