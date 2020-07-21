import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, RefreshControl, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    <ScrollView 
      contentContainerStyle={styles.scroll_container}
      refreshControl={
        <RefreshControl tintColor='#fff' refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <LinearGradient
        style={styles.container}
        colors={["#83a4d4","#b6fbff"]}
      >
        <MyAreaStatus/>
        <CountryStatus/>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll_container:{
    flex:1
  },
  container:{
    flex:1,
  },
  loading: {
    color:'#fff'
  }
})
