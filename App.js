import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const store = createStore(reducer);
export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store} >
        <AppNavigator />
      </Provider >
    );
  }
}
