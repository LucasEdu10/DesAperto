import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from "react-navigation";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";

import SingIn from "./pages/singIn";
import Profile from "./pages/profile"
import Main from "./pages/main";
import CadastroUser from "./pages/cadastroUser";

const MyTab = createStackNavigator(
  {
    SingInScreen: {
      screen: SingIn,
      navigationOptions: {
        header: null,
      }
    },
    CadastroUserScreen: {
      screen: CadastroUser,
      navigationOptions: {
        header: null,
      }
    },
    ProfileScreen: {
      screen: Profile,
    }
  }
);

const MyTabMenu = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
    },
  }
  );

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: MyTab,
    Login: MyTabMenu,
  },
  ));
export default AppContainer;