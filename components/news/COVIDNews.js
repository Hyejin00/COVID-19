import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Linking } from 'react-native';

export const COVIDNews = ({ cnews }) => {
  return(
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(cnews.originallink)}>
      <View style={styles.item}>
        <Text style={styles.title}>{cnews.title}</Text>
        <View style={styles.des}>
          <Text style={styles.description}>
            {cnews.description}
          </Text>
        </View>
        <Text style={styles.date}>{cnews.pubDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: .5,
    padding: 10,
    margin: 5
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
