import React, { Component } from "react";
import { Text, Button, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenOptions, NavigationScreenConfig } from "react-navigation";

type Props = {};
class SettingsScreen extends Component<Props> {
  static navigationOptions: NavigationScreenOptions = {
    title: "Settings",
  };

  constructor(props: Props) {
    super(props);
    console.log(`SettingsScreen: ${JSON.stringify(props)}`);
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

export default connect()(SettingsScreen);
