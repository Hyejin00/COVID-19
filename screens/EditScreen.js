import React, { useState } from 'react';
import { FlatList, View, Button } from 'react-native';
import OptionItem from '../components/plus/OptionItem';


const AreaList = ['서울', '경기도','인천','강원도','충청북도','세종','충청남도','대전','경상북도','전라북도','전라남도','광주','경상남도','대구','울산','부산','제주'];

export default function EditScreen(){

  const [myList, setMyList] = useState([]);

  const handleClick = (name, check) => {
    if (check){
      setMyList(myList.push(name));
    } else{
      let list = myList;
      list.splice(list.indexOf(name),1);
      setMyList(list);
    }
  }

  return (
    <View>
      <FlatList 
        data={AreaList}
        renderItem={({ item }) => <OptionItem name = {item} handleClick = { handleClick }/>}
        keyExtractor={item => item}
      />
      <Button
          title="Press me"
          color="#f194ff"
          onPress={() => console.log(myList)}
      />
    </View>
  );
}