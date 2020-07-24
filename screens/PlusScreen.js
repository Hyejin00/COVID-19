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
      setMyAreaList(myArea);
      setIsLoading(false);
    })
  },[]);

  return(
    isLoading?<Loading />:<FlatList data={myAreaList} renderItem={({ item }) => <AreaItem name = {item.title}/>} keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
});