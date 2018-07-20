import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation";
import LoginScreen from "./login"
import HomeTabScreen from "./homeTab";
import SearchTabScreen from "./searchTab";
import SettingsScreen from "./settings";

export const SCREEN_AUTH = "Auth";
export const SCREEN_LOGIN = "Login";
export const SCREEN_APP = "App";
export const SCREEN_MAIN = "Main";
export const SCREEN_HOME = "Home";
export const SCREEN_SEARCH = "Search";
export const SCREEN_SETTINGS = "Settings";

const AuthStack = createStackNavigator({
  Login: LoginScreen
})

const MainTab = createBottomTabNavigator({
  Home: createStackNavigator({
    Home: HomeTabScreen,
  }),
  Search: createStackNavigator({
    Search: SearchTabScreen,
    Settings: SettingsScreen,
  }),
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let icon: number;
        switch (routeName) {
          case SCREEN_HOME:
            icon = require("../img/home.png");
            break;
          case SCREEN_SEARCH:
            icon = require("../img/search.png");
            break;
          default:
            throw Error(`Unknown route name: ${routeName}`);
        }
        return <Image
          style={{ width: 24, height: 24, tintColor: tintColor! }}
          source={icon} />
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
// const AppStack = createStackNavigator({
//   Main: MainTab,
// });

export const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: MainTab,
}, {
    initialRouteName: SCREEN_AUTH,
  }
);