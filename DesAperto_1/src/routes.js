import { createStackNavigator } from "react-navigation";

import {
	Colors,
} from "react-native/Libraries/NewAppScreen";

import Main from "./pages/main";

export default createStackNavigator({
	Main
}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: Colors.dark,
		},
		headerTintColor: Colors.white
	},
});