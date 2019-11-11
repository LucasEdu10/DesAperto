import React, { Component } from "react"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import Welcome from "./pages/welcome";
import SingIn from "./pages/singIn";
import Main from "./pages/main";
import CadastroUser from "./pages/cadastroUser";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default createBottomTabNavigator (
    {
      SingInScreen: {
        screen: SingIn,
        navigationOptions: {
          tabBarVisible: false,
          header: false,
          tabBarComponent: false,
        }
      },
      Home: {
        screen: Main
      },
      CadastroUserScreen: {
        screen: CadastroUser,
      }
    },
    {
      tabBarOptions: {
          activeTintColor: "#34495e",
          inactiveTintColor: "#bdc3c7",
          style: {
            backgroundColor: "#ecf0f1"
          },
          showLabel: true
      },
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = FontAwesome5;
          let iconName;

          if(routeName === "Home"){
              iconName = "home";
          }else if(routeName === "CadastroUserScreen"){
              iconName = "user-alt";
          }else if(routeName === "SingInScreen"){
              iconName = "cog";
          }
          return <IconComponent name={iconName}
                                size={24}
                                color={tintColor}
                  />;
        },
      })
    }
  );