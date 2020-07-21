import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, RefreshControl, View } from 'react-native';

import MyAreaStatus from '../components/MyAreaStatus';
import CountryStatus from '../components/CountryStatus';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function HomeScreen(){
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollView} //아직 스타일 없음
        refreshControl={
          <RefreshControl tintColor='#fff' refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.container} contentContainerStyle={styles.contentContainer}>
        <MyAreaStatus/>
        <CountryStatus/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(151, 242, 250)',
  },
  loading: {
    color:'#fff'
  }
})
