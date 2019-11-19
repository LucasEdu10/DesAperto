import React, { Component } from "react";

import { View,
		Text,
		StyleSheet,
		} from "react-native";

export default class Profile extends Component {
	

	render(){
		const { navigation } = this.props;
		const nomeUser = navigation.getParam("email");

		return(
			<View style={styles.container}>
				<Text style={styles.text}> Olá Usuario, Bem vindo! </Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#23B0FF"
	},
	text: {
		marginTop: 40,
		color: "#FFF"
	}
})