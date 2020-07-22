import * as React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import { COVIDNews } from '../components/news/COVIDNews';

export default function NewsScreen() {
  const covidnews = useSelector(state => state.covidnews);

  return(
    <SafeAreaView>
      <ScrollView>
        {_.map(covidnews, cnews => <COVIDNews key={cnews.title} cnews={cnews}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}