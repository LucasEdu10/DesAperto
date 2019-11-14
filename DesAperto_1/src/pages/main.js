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

export default class Main extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	  		email: '',
	  		password: '',
	  		isAuthenticated: false,
	  		user: {displayName:"nulo"}
	  	};

	}

	sair = () => {
		this.props.navigation.navigate("SingInScreen");
	}

	render(){

		const loginState = this.props.navigation.getParam("loginState", null);
		console.log("state222", loginState);

		return(
		<View style={styles.container}>
			<View style={styles.separator}>
				<Text style={styles.menu}>Menu</Text>
				<Text style={styles.menu}>{ state.user.displayName }</Text>
				<View style={styles.buttonSair}>
				<Button
					color="#000"
					title="Sair"
					onPress={() => {this.sair()}}
				/>
				</View>
			</View>
		<ScrollView>

			<View style={styles.postContainer}>
				<View style={styles.separator2}>
					<TouchableOpacity>
						<Text style={styles.postTitle}>Carteira Virtual</Text>
						</TouchableOpacity>
						<View >
							<Image
							source={require("../assests/wallet.png")}
							style={styles.logo}
							/>
						</View>
					</View>
					<Text sytle={styles.postSub}>Carteira virtual, aonde você pode repassar para os seus amigos dinheiro.</Text>
				</View>
			

			<TouchableOpacity>
				<View style={styles.postContainer}>
					<View style={styles.separator2}>
						<Text style={styles.postTitle}>Ultimas Transações</Text>
						<View >
							<Image
							source={require("../assests/network.png")}
							style={styles.logoNet}
							/>
						</View>
					</View>
					<Text style={styles.postSub}>Aqui podemos ver as ultimas transações feitas</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity>
				<View style={styles.postContainer}>
					<View style={styles.separator2}>
						<Text style={styles.postTitle}>DesAperto Pag</Text>
						<View >
							<Image
							source={require("../assests/barcode.png")}
							style={styles.logoNet}
							/>
						</View>
					</View>
					<Text style={styles.postSub}>Com um QRcode, pedemos realizar tranferencias ;)</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity>
				<View style={styles.postContainer}>
					<View style={styles.separator2}>
						<Text style={styles.postTitle}>Configurações</Text>
						<View >
							<Image
							source={require("../assests/gears.png")}
							style={styles.logoNet}
							/>
						</View>
					</View>
					<Text style={styles.postSub}>Alterar configurações</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity>
				<View style={styles.postContainer}>
					<View style={styles.separator2}>
						<Text style={styles.postTitle}>Criar Sala</Text>
						<View >
							<Image
							source={require("../assests/chair.png")}
							style={styles.logo}
							/>
						</View>
					</View>
					<Text style={styles.postSub}>Aqui podemos criar uma sala de gastos em um rolê</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity>
				<View style={styles.postContainer}>
					<Text style={styles.postTitle}>Lucas Eduardo</Text>
					<Text style={styles.postSub}> Text TESTE TESTE </Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#23B0FF",
		justifyContent: "flex-start",
	},
	menu: {
		left: 30,
		fontSize: 20,
		color: "#FFF",
	},
	list: {
		padding: 35,
		fontSize: 20,
		color: "#FFF"
	},
	listEvents: {
		marginHorizontal: 20,
		marginVertical: 10,
		backgroundColor: "#FFF",
		padding: 20,

	},
	buttonSair: {
		right: 10,
	},
	postTitle: {
		margin: 10,
		fontSize: 18,
		fontWeight: "bold"
	},
	postContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
		backgroundColor: "#FFF",
		padding: 20,
		borderRadius: 9,

	},
	postSub: {
		marginTop: 10
	},
	separator: {
		margin: 20,
		height: 35,
		flexDirection: 'row',
		justifyContent: "space-between",
	},
	logo: {
		width: 31,
		height: 26,
	},
	separator2: {
		flexDirection: 'row',
		justifyContent: "space-between",
	},
	logoNet: {
		width: 30,
		height: 30,
	},

});