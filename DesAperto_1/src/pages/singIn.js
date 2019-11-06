import React, { Component } from "react";

import { View, 
        KeyboardAvoidingView,
		Text,
		StyleSheet,
		Image,
		Alert,
		TouchableOpacity,
		TextInput,
		} from "react-native";
import firebase from "react-native-firebase";


export default class SingIn extends Component {

  	state = {
  		email: '',
  		password: '',
  		isAuthenticated: false,
  	};

  	login = async () => {
  		const { email, password } = this.state;

  		try{
  			const user = await firebase.auth().signInWithEmailAndPassword(email, password);
  			this.setState({ isAuthenticated: true });
            this.props.navigation.navigate("MainScreen")
  			console.log(user);
  		}catch (err){
            Alert.alert("Acesso Negado")
  			console.log(err);
  		}
  	}



	clicou = () => {
		{/*console.log(this.state.user);*/}
        this.props.navigation.navigate("CadastroUserScreen")
	}
	
	render(){
		return(
            <KeyboardAvoidingView behavior="auto" style={styles.container}>
			<View style={styles.container}>
				<Image
					source={require("../assests/logo-2.png")}
					style={styles.logo}
				/>
				<TextInput 
					style={styles.text}
					placeholder="Digite seu E-mail"
					onChangeText={(email) => this.setState({email})}
          			value={this.state.email}
				/>
				<TextInput 
					style={styles.text}
					secureTextEntry={true}
					placeholder="Digite sua senha"
					onChangeText={(password) => this.setState({password})}
          			value={this.state.password}
				/>
				<TouchableOpacity
					style={styles.buttonLogin}
					onPress={() => {this.login()}}
					>
					<Text style={styles.login}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {this.clicou()}}
					>
					<Text style={styles.subLogin}>Realizar cadastro.</Text>
				</TouchableOpacity>
			</View>
            </KeyboardAvoidingView>
		)

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#23B0FF"
	},
	logo: {
		marginTop: -70,
		width: 160,
		height: 150,
		borderRadius: 200
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
	login: {
		fontSize: 20,
		color: "#23B0FF"

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