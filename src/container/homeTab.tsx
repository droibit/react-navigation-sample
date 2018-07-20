import React, { Component } from "react";
import { Text, Button, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenOptions } from "react-navigation";
import { Dispatch, Action } from "redux";
import * as Actions from "../module/actions";

type Props = {
  counter: number;
  increment(): void;
  decrement(): void;
};
class HomeTabScreen extends Component<Props> {
  static navigationOptions: NavigationScreenOptions = {
    title: "HOME",
  // headerTitle: "Hoge",
};

constructor(props: Props) {
  super(props);
  console.log(`HomeTabScreen: ${JSON.stringify(props)}`);
}

  public render() {
  const { counter } = this.props;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>HOME!!!!</Text>
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../img/home.png")}
      />
      <Text style={styles.welcome}>{counter}</Text>
      <Button title="Increment" onPress={e => this.props.increment()} />
      <Button title="Decrement" onPress={e => this.props.decrement()} />
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

const mapStateToProps = (state: { counter: number }) => {
  console.log(`mapStateToProps(state.counter=${state.counter})`);
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => {
      dispatch(Actions.incrementCount());
    },
    decrement: () => {
      dispatch(Actions.decrementCount());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTabScreen);
