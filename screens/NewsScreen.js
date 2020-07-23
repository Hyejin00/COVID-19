import * as React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COVIDNews } from '../components/news/COVIDNews';
import { Image, Divider } from 'react-native-elements';

import colors from '../constants/Colors'

export default function NewsScreen() {
  const covidnews = useSelector(state => state.covidnews);

  return(
    <SafeAreaView style={styles.container}>
      <Image
        source={ require('../assets/news_image.png')}
        style={{ width: 400, height: 200, marginBottom: 10}}
      />
      <Divider/>
      <ScrollView>
        {_.map(covidnews, cnews => <COVIDNews key={cnews.title} cnews={cnews}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.news.color
  }
})