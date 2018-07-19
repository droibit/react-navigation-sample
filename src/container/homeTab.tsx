import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet
} from "react-native";
import { connect } from 'react-redux';

type Props = {
};
class HomeTabScreen extends Component<Props> {

  constructor(props: Props) {
    super(props);
    console.log(`LoginScreen: ${JSON.stringify(props)}`);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HOME!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapStateToProps = (state: { counter: number }) => {
  console.log(`render(state.counter=${state.counter})`);
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(HomeTabScreen);