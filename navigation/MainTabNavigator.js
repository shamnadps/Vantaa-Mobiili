import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { strings } from '../locales/i18';
import { connect } from 'react-redux';
import { changeLanguage } from '../redux/reducer';

class BottomContainer extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  TabNav = () => {
    const HomeStack = createStackNavigator({
      Home: HomeScreen,
    });

    const LinksStack = createStackNavigator({
      Links: LinksScreen,

    });

    const SettingsStack = createStackNavigator({
      Settings: SettingsScreen,

    });
    HomeStack.navigationOptions = {
      tabBarLabel: strings('navigation.news'),
    };

    LinksStack.navigationOptions = {
      tabBarLabel: strings('navigation.links'),
    };

    SettingsStack.navigationOptions = {
      tabBarLabel: strings('navigation.settings'),
    };
    const MaterialTopTabNavigatorMain = createMaterialTopTabNavigator({
      HomeStack,
      LinksStack,
      SettingsStack,
    }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
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
    return <MaterialTopTabNavigatorMain />;
  }
  render() {

    return (
      <React.Fragment >
        {this.TabNav()}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
});

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomContainer);
