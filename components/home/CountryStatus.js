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

export default function CountryStatus({color}){

  const countryData = useSelector(state => state.countryData);
    // 'deathChanged': 0,
    // "accDefRate": 0.9439441754,
    // "accExamCnt": 1492071,
    // "accExamCompCnt": 1470320,
    // "careCnt": 884,
    // "clearCnt": 12698,
    // "createDt": "2020-07-22 10:27:17.21",
    // "deathCnt": 297,
    // "decideCnt": 13879,
    // "examCnt": 21751,
    // "resutlNegCnt": 1456441,
    // "seq": 207,
    // "stateDt": 20200722,
    // "stateTime": "00:00",
    // "updateDt": "null",
  return(
    <View style={styles.container}>
        <Card 
          title="국내 확진자 현황"
          titleStyle={{color: 'white', marginBottom:-5}}
          dividerStyle={{height:0}}
          containerStyle={{backgroundColor: color[0], borderRadius: 12, 
                      borderColor:  color[0], height: '60%', marginTop: 40}}>
        {/*react-native-elements Card*/}
          <Grid style={{ width: '100%' }}>
            <Col size={1.5} >
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNumTitle}>확진환자</Text>
              </Row>
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNum}>{addComma(countryData.decideCnt)}</Text>
              </Row>
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNumChanged}>(+{countryData.decideCntChanged})</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>격리중</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{addComma(countryData.careCnt)}</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>격리해제</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{addComma(countryData.clearCnt)}</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}>(+{countryData.clearCntChanged})</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>사망자</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{addComma(countryData.deathCnt)}</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}>(+{countryData.deathCntChanged})</Text>
              </Row>
            </Col>
          </Grid>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    bigRow: {
      height: 35, 
      justifyContent: 'center',
      alignItems: 'center'
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
    confirmedNumTitle: {
      color: 'white',
      fontSize: 20,
    },
    confirmedNum: {
      color: 'white',
      fontSize: 23,
      fontWeight: '700'
    },
    confirmedNumChanged: {
      color: 'white',
      fontSize: 16,

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
