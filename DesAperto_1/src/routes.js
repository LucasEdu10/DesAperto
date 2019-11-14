import React, { Component } from "react"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import Welcome from "./pages/welcome";
import SingIn from "./pages/singIn";
import Main from "./pages/main";
import CadastroUser from "./pages/cadastroUser";

<<<<<<< Updated upstream
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default createBottomTabNavigator (
=======
const LoginStack = createStackNavigator(
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
    }
  }
);

/*
então sacas, primeira bronca eh que tu ta 
com a tela do profile nesse navigator daqui de cima

quando o cara logar, eh pra ele ter acesso as coisas
dele, e sair da area d elogin e cadastro, mas no momento
se isso acontecer ele vai ficar impossibilitado de ver
o Profile dele / ; sacasse  a problematica?/  sim
*/

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Main
    },
    Profile: {
      screen: Profile
    },
  },
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Login: LoginStack,
  },
  ));
export default AppContainer;
>>>>>>> Stashed changes
