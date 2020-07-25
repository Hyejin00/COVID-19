import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList,View } from 'react-native';
import Loading from '../components/Loading';
import AreaItem from '../components/plus/AreaItem';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '../constants/Colors'


export default function PlusScreen(){

  const [myAreaList, setMyAreaList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    AsyncStorage.getItem('MyArea').then(data =>{
      const myArea = JSON.parse(data || '[]');
      setMyAreaList(myArea);
      setIsLoading(false);
    });
  },[]);

  const handleDelClick = async( name ) => {
    setIsLoading(true);
    const myArea = myAreaList;
    myArea.splice(myArea.indexOf(name),1);
    try{
      await AsyncStorage.setItem('MyArea', JSON.stringify(myArea));
    } catch(e){
      console.log(e);
    }
    setIsLoading(false);
  }

  return(
    <View style={styles.container}>
      {isLoading?<Loading />:<FlatList data={myAreaList} renderItem={({ item }) => <AreaItem name = {item} handleDelClick = { handleDelClick }/>} keyExtractor={item => item}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.plus.color
  }
});