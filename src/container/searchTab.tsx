import React, { Component } from "react";
import { Text, Button, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationTabScreenOptions } from "react-navigation";

type Props = {};
class SearchTabScreen extends Component<Props> {
  static navigationOptions: NavigationTabScreenOptions = {
    title: "Search",
    tabBarIcon: ({tintColor, focused}) => (
      <Image
        style={{ width: 32, height: 32, tintColor: tintColor! }}
        source={require("../img/search.png")}
      />
    ),
  };

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
