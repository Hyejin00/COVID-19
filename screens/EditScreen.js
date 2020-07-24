import React, { useState } from 'react';
import { FlatList, View, Button, StyleSheet } from 'react-native';
import OptionItem from '../components/plus/OptionItem';


const AreaList = ['서울', '경기도','인천','강원도','충청북도','세종','충청남도','대전','경상북도','전라북도','전라남도','광주','경상남도','대구','울산','부산','제주'];

export default function EditScreen(){

  const [myList, setMyList] = useState(Array(AreaList.length).fill(false));

  const handleClick = (i, checked) => {
    let list = myList.slice();
    list[i] = checked;
    setMyList(list);
  }

  return (
    <View style={styles.container}>
      <Button
          title="Press me"
          color="#f194ff"
          onPress={() => console.log(myList)}
      />
      <FlatList 
        data={AreaList}
        renderItem={({ item, index }) => <OptionItem name = {item} handleClick = {handleClick} index = {index}/>}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  }
});