import React from "react";
import { createAppContainer,
         createSwitchNavigator,
         createStackNavigator,
         createBottomTabNavigator
       } from "react-navigation";

import Ionicons from 'react-native-vector-icons/Ionicons';

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
      screen: Main
    },
    Profile: {
      screen: Profile
    },
  },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = "md-home";
          } else if (routeName === 'Profile') {
            iconName = "md-contact";
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#23B0FF",
      inactiveTintColor: 'gray',
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