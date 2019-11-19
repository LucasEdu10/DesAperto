import React, { Component } from "react";

import { View, 
		Text,
		StyleSheet,
		Image,
		Alert,
		TouchableOpacity,
		TextInput,
		Button,
		KeyboardAvoidingView,
		} from "react-native";

import firebase from "react-native-firebase";

export default class CadastroUser extends Component{


	state = {
  		email: '',
  		password: '',
  		displayName: '',
  		isAuthenticated: false,
  	};

	cadastrar = async () => {
		const { email, password, displayName} = this.state;

		try{
  			const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  			this.setState({ isAuthenticated: true });
            this.props.navigation.navigate("Home", {"email": this.state.email})
  			console.log(user);
  		}catch (err){
  			console.log(err);
  		}
	}

	back = () => {
		this.props.navigation.navigate("SingInScreen")
	}

	render(){
		return(
			<KeyboardAvoidingView behavior="auto" style={styles.container}>
			<View style={styles.container}>
			<TextInput
				style={styles.text}
				placeholder="Digite seu E-mail:"
				onChangeText={(email) => this.setState({email})}
				value={this.state.email}
			/>
			<TextInput
				style={styles.text}
				secureTextEntry={true}
				placeholder="Digite sua senha:"
				onChangeText={(password) => this.setState({password})}
				value={this.state.password}
			/>
			<TextInput
				style={styles.text}
				placeholder="Digite seu nome:"
				onChangeText={(displayName) => this.setState({displayName})}
				value={this.state.displayName}
			/>
			<View style={styles.buttonLogin}>
			<Button 
				title="Cadastrar"
				onPress={() => {this.cadastrar()}}
			/>

			<Button 
				title="Voltar"
				onPress={() => {this.back()}}
			/>
			</View>
			</View>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: -10,
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
		margin: 10,
		width: 200,
		height: 35,
		flexDirection: 'row',
		justifyContent: "space-between",
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