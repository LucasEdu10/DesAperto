import { createStackNavigator } from "react-navigation";

import {
	Colors,
} from "react-native/Libraries/NewAppScreen";

import SingIn from "./pages/singIn";
import Main from "./pages/main";

/*export default createStackNavigator({
	SingInScreen: {
    screen: SingIn,
    navigationOptions: {
      headerMode: "none",
      headerStyle: {
        backgroundColor: "#0265b3",
      },
      headerTintColor: Colors.white
    }
  },	
	MainScreen: {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#145493",
      },
      headerTintColor: Colors.white
    }
  },
});*/

export default createStackNavigator(
  {
    SingInScreen: {
      screen: SingIn,
      navigationOptions: {
        header: null,
      }
    },
    MainScreen: {
      screen: Main,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#145493",
        },
        headerTintColor: Colors.white
      }
    },
  }
);