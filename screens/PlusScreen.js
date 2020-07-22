import React, { useState, useEffect } from 'react';
import { StyleSheet,FlatList } from 'react-native';
import Loading from '../components/Loading';
import AreaItem from '../components/plus/AreaItem';
import AsyncStorage from '@react-native-community/async-storage';

export default function PlusScreen(){

  const [myAreaList, setMyAreaList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getMyArea = async () => {
    try {
      const myArea = await AsyncStorage.getItem('MyArea');
      console.log(myArea);
      return myArea != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setMyAreaList(getMyArea);
    console.log(myAreaList);
    console.log('zz');
  });

  return(
    isLoading?<FlatList data={[]} renderItem={({ item }) => <AreaItem name = {item.title}/>} keyExtractor={item => item.id.toString()}
    />:<Loading />
  );
}

const styles = StyleSheet.create({
});