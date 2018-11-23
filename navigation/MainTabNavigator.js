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
    const MaterialTopTabNavigatorMain = createMaterialTopTabNavigator({
      Home: {
        screen: HomeScreen, navigationOptions: {
          tabBarLabel: strings('navigation.news'),
        }
      },
      Links: {
        screen: LinksScreen, navigationOptions: {
          tabBarLabel: strings('navigation.links'),
        }
      },
      Settings: {
        screen: SettingsScreen, navigationOptions: {
          tabBarLabel: strings('navigation.settings'),
        }
      },
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
        initialRouteName: 'Home',
        lazy: false
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
