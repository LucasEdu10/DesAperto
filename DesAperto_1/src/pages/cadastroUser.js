import React, { Component } from "react";

import { View, 
		Text,
		StyleSheet,
		Image,
		Alert,
		TouchableOpacity,
		TextInput,
		Button
		} from "react-native";

import firebase from "react-native-firebase";

export default class CadastroUser extends Component{


	state = {
  		email: '',
  		password: '',
  		isAuthenticated: false,
  	};

	cadastrar = async () => {
		const { email, password } = this.state;

		try{
  			const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  			this.setState({ isAuthenticated: true });
            this.props.navigation.navigate("MainScreen")
  			console.log(user);
  		}catch (err){
  			console.log(err);
  		}
	}

	render(){
		return(
			<View style={styles.container}>
			<TextInput
				style={styles.text}
				placeholder="Digite seu E-mail:"
				onChangeText={(email) => this.setState({email})}
				value={this.state.email}
			/>
			<TextInput
				style={styles.text}
				placeholder="Digite sua senha:"
				onChangeText={(password) => this.setState({password})}
				value={this.state.password}
			/>
			<TextInput
				style={styles.text}
				placeholder="Digite seu nome: *OPCIONAL*"
			/>
			<Button 
				style={styles.buttonLogin}
				title="Cadastrar"
				onPress={() => {this.cadastrar()}}
			/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: -200,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#23B0FF"
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
		backgroundColor: "#FFF",
		marginTop: 10,
		borderRadius: 9,
		alignItems: "center",
		justifyContent: "center",
	},
	cadastrar: {
		borderColor: '#DDD'

	},
	subLogin: {
		marginTop: 40,
		color: "#FFF"
	},
	copyrigth: {
		marginTop: 100,
		color: "#FFF"
	}

})