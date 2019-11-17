import React, { Component } from "react";

import { View,
		Text,
		StyleSheet,
		} from "react-native";

export default class Profile extends Component {
	

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}> Olá </Text>
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