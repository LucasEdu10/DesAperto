import React, { Component } from "react";

import { View,
		Text,
		ScrollView,
		FlatList,
		StyleSheet,
		Button,
		Alert,
		ImageBackground
		} from "react-native";

export default class Welcome extends Component {

	render() {
		return(
			<View>
				<Text style={styles.list}> Ultimas transações </Text>
			</View>
			/*<ImageBackground source={"../assests/Background.png"} style={{width: '100%', height: '100%'}}>
    		//<Text>Inside</Text>
 			</ImageBackground>*/
		);
	}
}

const styles = StyleSheet.create({

});