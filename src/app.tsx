import React, { Component, } from 'react';
import { Provider } from 'react-redux';
import { store } from "./module"

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        
      </Provider>  
    );
  }
}