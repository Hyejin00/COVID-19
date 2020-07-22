import React from 'react';
import { FlatList, } from 'react-native';
import OptionItem from '../components/plus/OptionItem';


const AreaList = ['서울', '경기도','인천','강원도','충청북도','세종','충청남도','대전','경상북도','전라북도','전라남도','광주','경상남도','대구','울산','부산','제주'];

export default function EditScreen(){

  return (
    <FlatList 
      data={AreaList}
      renderItem={({ item }) => <OptionItem name = {item}/>}
      keyExtractor={item => item}
    />
  );
}