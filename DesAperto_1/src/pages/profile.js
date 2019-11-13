import React, { Component } from "react";

import { View,
		Text,
		ScrollView,
		FlatList,
		StyleSheet,
		Button,
		Alert,
		Image,
		TouchableOpacity
		} from "react-native";

export default class Profile extends Component {
	

	render(){
		return(
			<View>
				<Text style={styles.list}> Ultimas transações </Text>
			</View>
			);
	}
}