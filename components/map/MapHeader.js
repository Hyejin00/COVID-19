import React  from 'react';
import { StyleSheet, TouchableWithoutFeedback, SafeAreaView  } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import colors from '../../constants/Colors'

export default function MapHeader(){
  const navigation = useNavigation();

  return(
		<SafeAreaView style={styles.container}>
			<Grid >
				<Col size={3} style={{height:30}}>
					<TouchableWithoutFeedback
						onPress={()=>{navigation.openDrawer()}}>
							<Ionicons
							name= 'md-menu'
							size={30}
							color='white'
							style={{marginLeft:30, zIndex: 1}}/>
					</TouchableWithoutFeedback>
				</Col>
				<Col size={0.5} style={{height:30}}>
					<TouchableWithoutFeedback
						onPress={()=>{
								navigation.navigate('HomeScreen')
						}}
					>
						<AntDesign 
							name="staro" 
							size={27} 
							color="white"
							style={{margin:2, marginRight:18, zIndex: 1}}
						/>
					</TouchableWithoutFeedback>
				</Col>
				<Col size={0.5} style={{height:30}}>
					<TouchableWithoutFeedback
						onPress={()=>{
						navigation.navigate('PlusScreen')
						}}
					>
						<Entypo 
							name="plus"
							size={25} 
							color="white" 
							style={{margin:2, marginRight:18, zIndex: 1}}
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
		marginTop: 5,
		maxHeight: 150
	}
})
