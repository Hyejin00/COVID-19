import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Linking } from 'react-native';


export default function HomeScreen(){
  return (
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL("http://yna.kr/AKR20200721112300009?did=1195m")}>
      <View style={styles.item}>
        <Text style={styles.title}>EU 27개국, 코로나발 경기침체 극복에 1천 30조원 지원 합의</Text>
        <View style={styles.des}>
          <Text style={styles.description}>
            메르켈 EU 최대위기에서 안도... 마크롱 역사적인 날 
            독일 프랑스 리더십 승리... 이탈리아가 최대 수혜국될 
            듯 권혜진 김서영 기자 = 유럽연합 (EU) 지도자들이 
            신종 코로나 바이러스 감염증(코로나19)으로 충격을 받은...
          </Text>
        </View>
        <Text style={styles.date}>2020-07-21 15:01:00</Text>
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
