import React, { Component } from "react";

import { View, 
		Text,
		StyleSheet,
		Image,
		Alert,
		TouchableOpacity,
		TextInput
		} from "react-native";

export default class SingIn extends Component {



	clicou = () => {
		this.props.navigation.navigate("Main")
	}
	
	render(){
		return(
			<View style={styles.container}>
				<Image
					source={require("../assests/logo.png")}
					style={styles.logo}
				/>
				<TextInput 
					style={styles.text}
					placeholder="Digite seu E-mail"
				/>
				<TextInput 
					style={styles.text}
					secureTextEntry={true}
					placeholder="Digite sua senha"
				/>
				<TouchableOpacity
				style={styles.buttonLogin}
					onPress={() => {this.clicou()}}
					>
					<Text style={styles.login}>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.subLogin}
					onPress={() => {this.clicou()}}
					>
					<Text> Realizar login sem Cadastro</Text>
				</TouchableOpacity>
			</View>
		)

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#0265b3"
	},
	logo: {
		marginTop: -70,
		width: 150,
		height: 150,
		borderRadius: 100
	},
	text: {
		marginTop: 10,
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderColor: "#DDD",
		borderRadius: 9,
		padding: 10,
		marginBottom: 10, 
		width: 250
	},
	buttonLogin: {
		width: 250,
		height: 42,
		backgroundColor: "#3498db",
		marginTop: 10,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	login: {
		fontSize: 16,
		color: "#FFF"

	},
	subLogin: {
		marginTop: 40,
		color: "#FFF"
	}

})