import React, { Component, } from 'react';
import { Provider } from 'react-redux';
import { store } from "./module"
import { AppNavigator } from "./container"

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>  
    );
  }
}