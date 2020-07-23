import * as React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COVIDNews } from '../components/news/COVIDNews';
import { Tile } from 'react-native-elements';

import colors from '../constants/Colors'

export default function NewsScreen() {
  const covidnews = useSelector(state => state.covidnews);

  return(
    <SafeAreaView style={styles.container}>
      <Tile
        imageSrc={require('../assets/splash.png')}
        title=""
        titleStyle={{fontWeight:"300", color:"#FFF", fontStyle:"italic", fontSize:20}}
        height={300}
        featured
        caption=""
        captionStyle={{fontWeight:"200", color:"#e0aaff", fontStyle:"italic"}}
      />
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