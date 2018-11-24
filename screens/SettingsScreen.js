import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { Button } from '../components/Button';
import { strings } from '../locales/i18';
import { connect } from 'react-redux';
import { changeLanguage, changeFilter, changeFeeds, getFeeds } from '../redux/reducer';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,

  };

  state = {
    language: this.props.language,
    filter: this.props.filter,
    pushNotification: 'settings.notificationButtons.never'
  }

  changeLanguageHandler = (value) => {

    Alert.alert(
      'Please confirm',
      'Are you sure that you want to change the language',
      [
        { text: 'NO', onPress: () => console.log('Cancel Pressed'), },
        {
          text: 'YES', onPress: () => {
            this.setState({
              language: value
            })
            this.props.changeLanguage(value);
          }
        },
      ],
      { cancelable: true }
    )
  }

  changeFeeds = async (value) => {
    let feeds = this.state.filter;
    if (!feeds.includes(value)) {
      feeds.push(value)
    } else {
      feeds = feeds.filter(item => item !== value);
    }
    this.setState({
      filter: feeds
    })
    this.props.changeFilter(feeds);
    const newfeeds = await getFeeds(feeds);
    this.props.changeFeeds(newfeeds);
  }

  changePushNotification = (value) => {
    this.setState({
      pushNotification: value
    })
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>


          <Text style={styles.header}>{strings('settings.header').toUpperCase()}</Text>
          <Text style={styles.title}>{strings('settings.languageHeader')}</Text>
          <View style={styles.feedSection}>

            <Button type='default'
              active={this.state.language === 'fi'}
              text={strings('settings.langButtons.fi').toUpperCase()}
              clicked={() => this.changeLanguageHandler('fi')} />
            <Button type='default'
              active={this.state.language === 'sv'}
              text={strings('settings.langButtons.sv').toUpperCase()}
              clicked={() => this.changeLanguageHandler('sv')} />
            <Button type='default'
              active={this.state.language === 'en'}
              text={strings('settings.langButtons.en').toUpperCase()}
              clicked={() => this.changeLanguageHandler('en')} />
          </View>
          <Text style={styles.title}>{strings('settings.feedHeader')}</Text>
          <View style={styles.feedSection}>
            <Button active={this.state.filter.includes('FACEBOOK')} text='FACEBOOK' clicked={() => this.changeFeeds('FACEBOOK')} />
            <Button active={this.state.filter.includes('TWITTER')} text='TWITTER' clicked={() => this.changeFeeds('TWITTER')} />
            <Button active={this.state.filter.includes('YOUTUBE')} text='YOUTUBE' clicked={() => this.changeFeeds('YOUTUBE')} />
          </View>
          <View style={styles.feedSection}>
            <Button active={this.state.filter.includes('INSTAGRAM')} text='INSTAGRAM' clicked={() => this.changeFeeds('INSTAGRAM')} />
            <Button active={this.state.filter.includes('VANTAA')} text='VANTAA' clicked={() => this.changeFeeds('VANTAA')} />
            <Button active={this.state.filter.includes('SIVITYSVANTAA')} text='SIVITYSVANTAA' clicked={() => this.changeFeeds('SIVITYSVANTAA')} />
          </View>
          <View style={styles.feedSection}>
            <Button active={this.state.filter.includes('EVENTS')} text='EVENTS' clicked={() => this.changeFeeds('EVENTS')} />
          </View>

          {/* <Text style={styles.title}>{strings('settings.notificationsHeader')}</Text>
          <View style={styles.feedSection}>
            <Button type='default'
              active={this.state.pushNotification === 'settings.notificationButtons.never'}
              text={strings('settings.notificationButtons.never')}
              clicked={() => this.changePushNotification('settings.notificationButtons.never')} />
            <Button type='default'
              active={this.state.pushNotification === 'settings.notificationButtons.alerts'}
              text={strings('settings.notificationButtons.alerts')}
              clicked={() => this.changePushNotification('settings.notificationButtons.alerts')} />
            <Button type='default'
              active={this.state.pushNotification === 'settings.notificationButtons.always'}
              text={strings('settings.notificationButtons.always')}
              clicked={() => this.changePushNotification('settings.notificationButtons.always')} />
          </View> */}
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
  changeFeeds: (feeds) => dispatch(changeFeeds(feeds))
});

const mapStateToProps = (state) => ({
  language: state.language,
  filter: state.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',

  },
  header: {
    flex: 1,
    color: 'black',
    marginTop: 40,
    marginLeft: 10,
    fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    fontSize: 26,
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
  },
  title: {
    color: 'black',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 14,

    marginBottom: 10,
    fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",

  },
  feedSection: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,

  }

});
