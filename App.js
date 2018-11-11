import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store} >
        <AppNavigator />
      </Provider >
    );
  }
}
