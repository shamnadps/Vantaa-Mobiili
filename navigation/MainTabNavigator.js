import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { strings } from '../locales/i18';
import { connect } from 'react-redux';
import { changeLanguage } from '../redux/reducer';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: strings('navigation.news'),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
}, {
    navigationOptions: {
      header: null
    },
  });

LinksStack.navigationOptions = {
  tabBarLabel: strings('navigation.links'),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
}, {
    navigationOptions: {
      header: null
    },
  });

SettingsStack.navigationOptions = {
  tabBarLabel: strings('navigation.settings'),
  header: null
};

const MaterialTopTabNavigator = createMaterialTopTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#0042a5',
        color: '#FFF',
        paddingBottom: 10
      },
      activeTintColor: 'white',
      labelStyle: {
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
        fontSize: 12
      },
      indicatorStyle: {

        backgroundColor: 'white', // color of the indicator
        height: 2,
        top: 0,
      }
    },
    initialRouteName: 'HomeStack'
  }
);

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
});

const mapStateToProps = (state) => ({
  language: state.language,
});

const mergeProps = (state, dispatch, ownProps) => {
  return ({
    ...ownProps,
    screenProps: {
      ...ownProps.screenProps,
      ...state,
      ...dispatch,
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MaterialTopTabNavigator);
