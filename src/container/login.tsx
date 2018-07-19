import React, {
  Component,
} from "react";
import {
  TouchableOpacity,
  Text,
  Button,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent
} from "react-native";
import { Action, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from 'react-redux';
import * as Actions from "../module/actions";

type Props = {
  screen: string,
  nextScreen(): void,
};

class LoginScreen extends Component<Props> {

  constructor(props: Props) {
    super(props);
    console.log(`LoginScreen: ${JSON.stringify(props)}`);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LOGIN!!!</Text>
        <Button
          title="Continue"
          onPress={e => this.props.nextScreen()}
        />
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

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, props: Props) => {
//   return {
//     nextScreen: () => {
//       console.log("dispatch: login");
//       dispatch(Actions.login())
//     },
//   }
// };

export default connect()(LoginScreen);