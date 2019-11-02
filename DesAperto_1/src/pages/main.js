import React, { Component } from "react";
//import api from " ../services/api";

import { View, Text, ScrollView, FlatList, StyleSheet, Button , Alert } from "react-native";

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
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
			<Text style={styles.listEvents}> Text TESTE TESTE </Text>
		</ScrollView>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0265b3"
	},
	list: {
		padding: 35,
		fontSize: 20,
		color: "#FFF"
	},
	listEvents: {
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderColor: "#DDD",
		borderRadius: 20,
		padding: 20,
		marginBottom: 20
	},
	buttonCor: {
		color:  "#FFF"
	}

});