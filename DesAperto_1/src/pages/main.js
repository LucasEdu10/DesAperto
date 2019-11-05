import React, { Component } from "react";

import { View,
		Text,
		ScrollView,
		FlatList,
		StyleSheet,
		Button,
		Alert
		} from "react-native";

export default class Main extends Component {

	static navigationOptions = {
		title: "DesAperto"
	};

	render(){
		return(
		<View style={styles.container}>
			<Button style={styles.buttonCor}
          	title="Sair"
          	onPress={() => Alert.alert('Cannot press this one')}
        	/>
		<ScrollView>
			<Text style={styles.list}> Ultimas transações </Text>
			<View style={styles.postContainer}>
			<Text style={styles.postTitle}>Lucas Eduardo</Text>
			<Text sytle={styles.postSub}>TESTE TESTE</Text>
			</View>
			<View style={styles.postContainer}>
			<Text style={styles.postTitle}>Lucas Eduardo</Text>
			<Text style={styles.postSub}> Text TESTE TESTE </Text>
			</View>
			<View style={styles.postContainer}>
			<Text style={styles.postTitle}>Lucas Eduardo</Text>
			<Text style={styles.postSub}> Text TESTE TESTE </Text>
			</View>
			<View style={styles.postContainer}>
			<Text style={styles.postSub}> Text TESTE TESTE </Text>
			</View>
			<View style={styles.postContainer}>
			<Text style={styles.postSub}> Text TESTE TESTE </Text>
			</View>
			<View style={styles.postContainer}>
			<Text style={styles.postSub}> Text TESTE TESTE </Text>
			</View>
			<View style={styles.postContainer}>
			<Text style={styles.postSub}> Text TESTE TESTE </Text>
			</View>
		</ScrollView>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#23B0FF"
	},
	list: {
		padding: 35,
		fontSize: 20,
		color: "#FFF"
	},
	listEvents: {
		marginHorizontal: 20,
		marginVertical: 10,
		backgroundColor: "#FFF",
		padding: 20,

	},
	buttonCor: {
		color:  "#FFF"
	},
	postTitle: {
		fontSize: 18,
		fontWeight: "bold"
	},
	postContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
		backgroundColor: "#FFF",
		padding: 20,

	},
	postSub: {

	}

});