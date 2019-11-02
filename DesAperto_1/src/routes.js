import { createStackNavigator } from "react-navigation";

import {
	Colors,
} from "react-native/Libraries/NewAppScreen";

import SingIn from "./pages/singIn";
import Main from "./pages/main";

/*const Routes = createStackNavigator({
	SingIn,
	Main,
});*/

export default createStackNavigator({
	SingIn,
},	{
	navigationOptions: {
		headerStyle: {
			backgroundColor: "#0265b3",
		},
		headerTintColor: Colors.white
	},
	Main
}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: "#145493",
		},
		headerTintColor: Colors.white
	},
});