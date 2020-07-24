import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableHighlight ,Text } from 'react-native';
import OptionItem from '../components/plus/OptionItem';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';


const AreaList = ['검역', '제주', '경남', '경북', '전남', '전북', '충남', '충북', '강원', '경기', '세종', '울산', '대전', '광주', '인천', '대구', '부산', '서울'];

export default function EditScreen({navigation}){
 
  const [myList, setMyList] = useState(Array(AreaList.length).fill(false));
  const [isLoading, setLoading] = useState(false);

  const handleClick = (i, checked) => {
    let list = myList.slice();
    list[i] = checked;
    setMyList(list);
  }

  const isChecked = (name, i) => {
    if(myList[i]){
      return name;
    }
  }

  const storeMyList = async () => {
    try {
      const store_data = AreaList.filter(isChecked);
      await AsyncStorage.setItem('MyArea', JSON.stringify(store_data));
    } catch (e) {
      console.log(e);
    }
    navigation.navigate('HomeScreen');
  }

  return (
    isLoading?<Loading />:<View style={styles.container}>
    <FlatList 
      data={AreaList}
      renderItem={({ item, index }) => <OptionItem name = {item} handleClick = {handleClick} index = {index}/>}
      keyExtractor={item => item}
    />
    <TouchableHighlight
      style={styles.save_button}
      onPress={() => {
        setLoading(true);
        storeMyList();
      }}
    >
      <Text style={styles.btn_text}>저장</Text>
    </TouchableHighlight>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  save_button: {
    margin:4,
    backgroundColor:'#3498DB',
    padding: 13,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  btn_text: {
    fontSize: 20,
    color:'#fff'
  }
});