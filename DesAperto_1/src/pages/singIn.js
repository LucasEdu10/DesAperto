import React, { Component } from "react";

import { View, 
		Text,
		StyleSheet,
		Image,
		Alert,
		TouchableOpacity,
		TextInput
		} from "react-native";
import firebase from "react-native-firebase";


export default class SingIn extends Component {

	/*constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  	}*/

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
  			console.log(user);
  		}catch (err){
  			console.log(err);
  		}
  	}



	clicou = () => {
		console.log(this.state.user);  // para printar no console, para saber os valores recebidos
        console.log(this.state.password);
        this.props.navigation.navigate("MainScreen")
        //Autenticação local
		/*if (this.state.user === auth.user && this.state.password === auth.password) {
			Alert.alert('Login com sucesso!')
			this.props.navigation.navigate("MainScreen")
		}else{
			Alert.alert('Acesso Negado')
		}*/
	}
	
	render(){
		return(
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

				//{ this.state.isAuthenticated ? <Text>Logado com sucesso!</Text> : '' }

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate("MainScreen")}
					>
					<Text style={styles.subLogin}>Realizar login sem Cadastro</Text>
				</TouchableOpacity>
				<Text></Text>
			</View>
		)

	}
}

	const auth = {
  	user: 'Lucas',
  	password: 'teste'
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