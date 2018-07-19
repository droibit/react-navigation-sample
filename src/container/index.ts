import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation"; 
import LoginScreen from "./login"
import HomeTabScreen from "./homeTab";
import SearchTabScreen from "./searchTab";

export const SCREEN_AUTH = "Auth";
export const SCREEN_LOGIN = "Login";
export const SCREEN_APP = "App";
export const SCREEN_MAIN = "Main";
export const SCREEN_SEARCH = "Home";
export const SCREEN_HOME = "Search";

const AuthStack = createStackNavigator({
  Login: LoginScreen
})

const MainTab = createBottomTabNavigator({
  Home: createStackNavigator({
    Home: HomeTabScreen,
  }),
  Search: createStackNavigator({
    Search: SearchTabScreen,
  }),
}, {
  tabBarOptions: {
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