import React, { useState }  from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { useSelector } from 'react-redux';

import colors from '../../constants/Colors'

function addComma(num) {
  num *= 1;
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

export default function MapCardView(){
  const stateFocus = useSelector(state => state.stateFocus);
  const areaData = useSelector(state => state.areaData);

  const info = areaData[stateFocus];
  
  return(
    <View style={styles.container}>
        <Card 
          dividerStyle={{height:0}}
          containerStyle={{backgroundColor: colors.map.cardColor, borderRadius: 12, 
                      borderColor:  colors.map.cardColor, height: '53%'}}>
        {/*react-native-elements Card*/}
          <Grid>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>총확진자</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{info.defCnt}명</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>전일대비</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>+{info.incDec}명</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>격리중</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{info.isolIngCnt}명</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>사망자</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{info.deathCnt}명</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}></Text>
              </Row>
            </Col>
          </Grid>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '28%',
        width: '90%',
        alignSelf: 'center',
    },
    smallRow: {
      height: 30, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    smallCol:{
      marginRight:6,
      marginTop: 7
    },
    smallTitle: {
      color: 'white',
      fontSize: 15,

    },
    smallData: {
      color: 'white',
      fontWeight: '600',
      fontSize: 20,

    },
    smallDataChanged: {
      color: 'white',
      fontSize: 15,
    }
})
