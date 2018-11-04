import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { strings } from '../locales/i18';
import { MonoText } from '../components/StyledText';
import { DateHeader } from '../components/DateHeader';
import { connect } from 'react-redux';
import { getFeeds } from '../redux/reducer';
import { changeLanguage, changeFeeds } from '../redux/reducer';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  state = {
    advertisements: this.props.advertisements
  }

  componentDidMount = async () => {
    const feeds = await getFeeds();
    this.props.changeFeeds(feeds);
    this.setState({
      advertisements: this.props.advertisements
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            <ImageBackground
              resizeMode='cover'
              style={styles.serviceImage}
              source={
                require('../assets/images/bg.jpg')
              }
            >
              <DateHeader />
              <Text style={styles.header}>{strings('newsfeed.header')} Lengths is: {this.state.advertisements.length}</Text>


              <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                <MonoText style={styles.codeHighlightText}></MonoText>
              </View>

            </ImageBackground>
          </View>



        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  advertisements: state.advertisements
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
  changeFeeds: (feeds) => dispatch(changeFeeds(feeds))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    color: '#FFFFFF',
    marginTop: 5,
    marginLeft: 10,
    fontWeight: '900',
    fontSize: 26
  },
  serviceImage: {
    flex: 1,
    justifyContent: 'space-between',
    height: 700
  },
});
