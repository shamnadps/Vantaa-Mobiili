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
  Dimensions,
  Animated,
  FlatList
} from 'react-native';
import { Header } from 'react-navigation';
import { strings } from '../locales/i18';
import { DateHeader } from '../components/DateHeader';
import { connect } from 'react-redux';
import { getFeeds } from '../redux/reducer';
import { changeLanguage, changeFeeds, changeFilter, getFeedsMoreFeeds } from '../redux/reducer';
import { NewsCard } from '../components/NewsCard';
const { height, width } = Dimensions.get('window');
import SideSwipe from 'react-native-sideswipe';
import { images, facts } from '../constants/facts';
import NavBar from '../navigation/MainTabNavigator';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      enableScroll: true,
      viewTop: height,
      carouselHeight: height,
      endReached: false,
      fetchInProgress: false,
      fixScroll: false,
      offset: 0,
      scrollViewTop: 0
    }
  }

  componentWillMount = async () => {
    const feeds = await getFeeds(this.props.filter);
    this.props.changeFeeds(feeds);
  }

  keyExtractor = (item, index) => item.id.toString();

  handleFeedScroll = async (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > this.state.offset ? 'up' : 'down';
    if (direction === 'down' && currentOffset < 0) {
      const feeds = await getFeeds(this.props.filter);
      this.props.changeFeeds(feeds);
    }
  }

  handleScroll = async (event) => {

    const fetchMore = event.nativeEvent.contentSize.height
      <= (event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 400);

    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > this.state.offset ? 'up' : 'down';

    this.setState({ offset: currentOffset });

    if (currentOffset >= height - 20 && direction === 'up' && !this.state.fixScroll) {
      this.setState({ fixScroll: true, scrollHeight: height, enableScroll: false });
    }

    if (this.props.feeds && this.props.feeds.length > 0 && fetchMore && !this.state.fetchInProgress) {
      this.setState({ fetchInProgress: true });
      const skip = this.props.feeds[this.props.feeds.length - 1].id;
      const filter = this.props.filter;
      const moreFeeds = await getFeedsMoreFeeds(filter, skip);
      const newFeeds = [...this.props.feeds, ...moreFeeds];
      this.props.changeFeeds(newFeeds);
      this.setState({ fetchInProgress: false });
    }
  }

  hideFeed = () => {
    this.setState({
      carouselHeight: height,
      viewTop: 0
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


          <Animated.ScrollView
            onScroll={this.handleScroll.bind(this)}
            scrollEnabled={this.state.enableScroll}
            contentContainerStyle={[{ height: height * 2 }]}
            overScrollMode='never'
            scrollEventThrottle={1}
            ref='_scrollView'>

            <SideSwipe
              index={this.state.currentIndex}
              style={{ width, height: this.state.scrollHeight }}
              ref="myInput"
              data={images}
              onIndexChange={index =>
                this.setState(() => ({ currentIndex: index }))
              }
              renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (


                <ImageBackground
                  resizeMode='cover'
                  style={{ flex: 1, width, height }}
                  source={{
                    uri: item
                  }}
                >

                  <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                    height: this.state.carouselHeight,

                  }}>
                    <Text style={styles.facts}>{facts[itemIndex]}</Text>
                  </View>

                </ImageBackground>
              )}

            />
            <View style={{

              padding: 10,
              position: 'absolute'
            }}>
              <DateHeader />
              <Text style={styles.header}>{strings('newsfeed.header').toUpperCase()}</Text>
            </View>

            <Animated.ScrollView
              scrollEnabled={!this.state.enableScroll}
              overScrollMode='never'
              onScrollEndDrag={this.handleFeedScroll.bind(this)}
              scrollEventThrottle={1}
              contentContainerStyle={[styles.contentContainer, { minHeight: height, },]}

            >
              {this.props.feeds && this.props.feeds.length > 0 ?

                <View style={{ flex: 1, backgroundColor: 'rgba(237, 237, 237, 1)', marginBottom: 55, paddingTop: 60 }}>
                  <FlatList

                    data={this.props.feeds}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => (

                      <NewsCard key={item.id} item={item} />

                    )}
                  />

                </View> :
                <View style={{ flex: 1, height, backgroundColor: 'rgba(237, 237, 237, 1)', padding: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

                  <ImageBackground
                    resizeMode='cover'
                    style={styles.loadingImage}
                    source={
                      require('../assets/images/splash.png')
                    }
                  >
                    <Text style={{
                      flex: 1, height,
                      marginTop: 200,
                      fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
                      fontWeight: Platform.OS === 'ios' ? "bold" : "100",
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}>Loading feeds... Please wait.</Text>
                  </ImageBackground>
                </View>

              }

            </Animated.ScrollView>
          </Animated.ScrollView>
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
    fontSize: 26,
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    fontWeight: Platform.OS === 'ios' ? "bold" : "100",
  },
  facts: {
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Regular",
    marginBottom: 100,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    textAlign: 'center'
  },
  contentContainer: { flexGrow: 1, },
  serviceImage: {
    flexGrow: 1,
    height
  },
  loadingImage: {
    flexGrow: 1,
    height,
    width
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
