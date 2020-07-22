import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

import colors from '../constants/Colors'

function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

export default function CountryStatus(){

  const countryData = {
    'confirmedNum': 10909,
    'confirmedNumChanged': 23,
    'release': 9632,
    'releaseChanged': 173,
    'underExam': 28245,
    'underExamChanged': 11,
    'death': 256,
    'deathChanged': 0,
  }

  return(
    <View style={styles.container}>
        <Card 
          title="국내 확진자 현황"
          titleStyle={{color: 'white'}}
          containerStyle={{backgroundColor: colors.light.maxColor, borderRadius: 12, 
                      borderColor:  colors.light.maxColor, height: '60%', marginTop: 40}}>
        {/*react-native-elements Card*/}
          <Grid style={{ width: '100%' }}>
            <Col size={1.5} >
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNumTitle}>확진환자</Text>
              </Row>
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNum}>{addComma(countryData.confirmedNum)}</Text>
              </Row>
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNumChanged}>(+{countryData.confirmedNumChanged})</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>격리해제</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{addComma(countryData.release)}</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}>(+{countryData.releaseChanged})</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>검사중</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{addComma(countryData.underExam)}</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}>(+{countryData.underExamChanged})</Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>사망자</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}>{addComma(countryData.death)}</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}>(+{countryData.deathChanged})</Text>
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
      fontSize: 14,

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

    }
})
