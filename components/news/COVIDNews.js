import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Linking } from 'react-native';

import colors from '../../constants/Colors'

export const COVIDNews = ({ cnews }) => {
  var title = cnews.title.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
  title = title.replace(/&quot;/ig, "");
  var description = cnews.description.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
  description = description.replace(/&quot;/ig, "");

  const pubDate = cnews.pubDate;
  const date = new Date(pubDate);
  const real_date = date.getFullYear()+'년 '+date.getMonth()+'월 '+date.getDate()+'일 '+(date.getHours()<10?'0':'')+date.getHours()+":"+(date.getMinutes()<10?'0':'')+date.getMinutes();

  return(
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(cnews.originallink)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.des}>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
        <Text style={styles.date}>{real_date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.news.color
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginLeft: 5,
    marginRight: 5
  },
  des: {
    marginTop: 5,
    marginBottom: 5
  }, 
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  description: {
    color: "gray"
  },
  date: {
    color: "gray"
  }
})
