import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Loading from '../components/Loading';
import AreaItem from '../components/plus/AreaItem';
import AsyncStorage from '@react-native-community/async-storage';

export default function PlusScreen(){

  const [myAreaList, setMyAreaList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    AsyncStorage.getItem('MyArea').then(data =>{
      const myArea = JSON.parse(data || '[]');
      console.log(myArea);
      setMyAreaList(myArea);
      setIsLoading(false);
    });
  },[]);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('MyArea')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  return(
    isLoading?<Loading />:<FlatList data={myAreaList} renderItem={({ item }) => <AreaItem name = {item}/>} keyExtractor={item => item}
    />
  );
}

const styles = StyleSheet.create({
});