import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function OptionItem({ name }){

  const [isSelected, setIsSelected] = useState(false);

  return(
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#ccc"
      onPress={() => setIsSelected((cur)=>!cur)}
    >
      <View style = {isSelected?{...styles.item_container,...{backgroundColor: '#EAF2F8'}}:{...styles.item_container,...{backgroundColor: '#FBFCFC'}}}>
        <Ionicons name={isSelected?"md-checkmark-circle":"md-radio-button-off"} size={24} color={isSelected?"#3498DB":"#777777"} />
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
  },
  name_font:{
    fontSize: 20,
    marginStart: 13
  }
})