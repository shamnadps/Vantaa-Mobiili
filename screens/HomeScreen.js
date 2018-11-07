import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Header } from 'react-navigation';
import { strings } from '../locales/i18';
import { DateHeader } from '../components/DateHeader';
import { connect } from 'react-redux';
import { getFeeds } from '../redux/reducer';
import { changeLanguage, changeFeeds, changeFilter } from '../redux/reducer';
import { NewsCard } from '../components/NewsCard';
const { height, width } = Dimensions.get('window');

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      enableScroll: true,
      viewTop: height
    }
  }

  componentWillMount = async () => {
    const feeds = await getFeeds(this.props.filter);
    this.props.changeFeeds(feeds);
  }

  handleScroll = (event) => {
    this.setState({
      top: event.nativeEvent.contentOffset.y,
      viewTop: this.state.viewTop - event.nativeEvent.contentOffset.y
    });

  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode='stretch'
          style={styles.serviceImage}
          source={
            require('../assets/images/bg.jpg')
          }
        >

          <ScrollView onScroll={this.handleScroll.bind(this)}>

            <View style={{ flex: 1, height: this.state.viewTop, }}>
              <DateHeader />
              <Text style={styles.header}>{strings('newsfeed.header')}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {this.props.feeds.length > 0 ?
                <View style={{ flex: 1, backgroundColor: 'rgba(237, 237, 237, 1)', marginBottom: Header.HEIGHT, paddingTop: 10 }}>
                  {
                    this.props.feeds.map((item) => {
                      return (
                        <NewsCard key={item.id} item={item} />
                      );
                    })}
                </View> :
                <View style={{ flex: 1, height, backgroundColor: 'rgba(237, 237, 237, 1)', padding: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                  <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>Loading feeds. Pleasw wait.</Text>
                </View>}
            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </View >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    feeds: state.feeds,
    filter: state.filter
  };
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
  changeFeeds: (feeds) => dispatch(changeFeeds(feeds)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#fff',
  },
  header: {
    color: '#FFFFFF',
    marginTop: 15,
    marginLeft: 10,
    fontWeight: '900',
    fontSize: 26
  },
  contentContainer: { flexGrow: 1, },
  serviceImage: {
    flexGrow: 1,
    justifyContent: 'space-between',
    height
  },
  source: {
    alignItems: 'flex-end',
    width: 80,
    margin: 0,
    padding: 4,
    justifyContent: 'flex-end',
    textAlign: 'center',
    top: -10
  }
});
