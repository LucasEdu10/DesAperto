import { createStackNavigator } from "react-navigation";

import {
	Colors,
} from "react-native/Libraries/NewAppScreen";

import SingIn from "./pages/singIn";
import Main from "./pages/main";
import CadastroUser from "./pages/cadastroUser";

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
          backgroundColor: "#23B0FF",
        },
        headerTintColor: Colors.white
      }
    },
    CadastroUserScreen: {
      screen: CadastroUser,
      navigationOptions: {
      headerStyle: {
          backgroundColor: "#23B0FF",
        },
        headerTintColor: Colors.white
      }
    },
  }
);