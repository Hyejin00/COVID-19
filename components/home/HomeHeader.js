import React, { useState }  from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, SafeAreaView  } from 'react-native';
import { useSelector } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import colors from '../../constants/Colors'


export default function HomeHeader(){

	const curPage = useSelector(state => state.curPage);
	
  const navigation = useNavigation();

  return(
		<SafeAreaView style={styles.container}>
			<Grid >
				<Col size={10} >
					<TouchableWithoutFeedback
						onPress={()=>{navigation.openDrawer()}}>
							<Ionicons
							name= 'md-menu'
							size={30}
							color='white'
							style={{marginLeft:30}}/>
					</TouchableWithoutFeedback>
				</Col>
				<Col size={0.1}>
					<TouchableWithoutFeedback
						onPress={()=>{
								navigation.navigate('MapScreen')
						}}
					>
						<Entypo 
							name="map"
							size={25} 
							color="white" 
							style={{margin:2, marginRight:18}}
						/>
					</TouchableWithoutFeedback>
				</Col>
				<Col size={0.1} >
					<TouchableWithoutFeedback
						onPress={()=>{
						navigation.navigate('PlusScreen')
						}}
					>
						<Entypo 
							name="plus"
							size={25} 
							color="white" 
							style={{margin:2, marginRight:18}}
						/>
					</TouchableWithoutFeedback>
				</Col>
			</Grid>
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		marginTop: 10
	}
})
