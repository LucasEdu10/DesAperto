import React, { Component } from "react";
import api from " ../services/api";

import { View, Text } from "react-native";

export default class Main extends Component {

	static navigationOptions = {
		title: "Menu"
	};

	render(){
		return(
		<View>
			<Text> Página Main </Text>
		</View>
		);
	}
}