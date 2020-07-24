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

  console.log(stateFocus)

  return(
    <View style={styles.container}>
        <Card 
          title="국내 확진자 현황"
          titleStyle={{color: 'white', marginBottom:-20}}
          dividerStyle={{height:0}}
          containerStyle={{backgroundColor: colors.map.maxColor, borderRadius: 12, 
                      borderColor:  colors.map.maxColor, height: '60%', marginTop: 40}}>
        {/*react-native-elements Card*/}
          <Grid style={{ width: '100%' }}>
            <Col size={1.5} >
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNumTitle}>확진환자</Text>
              </Row>
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNum}> </Text>
              </Row>
              <Row style={styles.bigRow}>
                  <Text style={styles.confirmedNumChanged}></Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>격리중</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}></Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>격리해제</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}></Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallDataChanged}></Text>
              </Row>
            </Col>
            <Col size={1} style={styles.smallCol}>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallTitle}>사망자</Text>
              </Row>
              <Row style={styles.smallRow}>
                  <Text style={styles.smallData}></Text>
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
        height: '30%',
        marginTop: 20,
        marginBottom: -20,
        width: '90%',
        alignSelf: 'center'
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
