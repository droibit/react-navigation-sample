import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation"; 
import LoginScreen from "./login"
import HomeTabScreen from "./homeTab";
import SearchTabScreen from "./searchTab";

export const SCREEN_LOGIN = "SCREEN_LOGIN";
export const SCREEN_SEARCH = "SCREEN_SEARCH";
export const SCREEN_HOME = "SCREEN_HOME";
export const SCREEN_SETTINGS = "SCREEN_SETTINGS";
export const SCREEN_MODAL = "SCREEN_MODAL";
export const SCREEN_MAIN = "SCREEN_MAIN";

const mainScreen = createBottomTabNavigator({
  Home: HomeTabScreen,
  Search: SearchTabScreen,
});

export const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Main: mainScreen,
}, {
    initialRouteName: "Login",
  }
);