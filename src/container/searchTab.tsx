import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import {
  NavigationScreenOptions,
  NavigationScreenConfig,
} from "react-navigation";
import { SCREEN_SETTINGS } from ".";

type Props = {};
class SearchTabScreen extends Component<Props> {
  static navigationOptions: NavigationScreenConfig<NavigationScreenOptions> = ({ navigation }) => ({
    title: "Search",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.push(SCREEN_SETTINGS)}
      />
    ),
  });

  constructor(props: Props) {
    super(props);
    console.log(`SearchTabScreen: ${JSON.stringify(props)}`);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SEARCH!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default connect()(SearchTabScreen);
