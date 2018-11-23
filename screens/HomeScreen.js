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
import { Header, NavigationEvents } from 'react-navigation';
import { strings } from '../locales/i18';
import { DateHeader } from '../components/DateHeader';
import { connect } from 'react-redux';
import { getFeeds } from '../redux/reducer';
import { changeLanguage, changeFeeds, changeFilter, getFeedsMoreFeeds } from '../redux/reducer';
import { NewsCard } from '../components/NewsCard';
const { height, width } = Dimensions.get('window');
import SideSwipe from 'react-native-sideswipe';
import { images, facts, getRandomFacts, getRandomImages } from '../constants/facts';
import NavBar from '../navigation/MainTabNavigator';
import Toast from 'react-native-simple-toast';
import Carousel from 'react-native-looped-carousel';

class HomeScreen extends React.Component {

  static navigationOptions = () => {
    return {
      header: null,
      tabBarOnPress({ navigation, defaultHandler }) {
        navigation.state.params.onTabFocus();
        defaultHandler();
      }
    };
  };

  constructor(props) {
    super(props);
    props.navigation.setParams({
      onTabFocus: this.handleTabFocus
    });
    this.state = {
      top: 0,
      enableScroll: true,
      viewTop: height,
      carouselHeight: height,
      endReached: false,
      fetchInProgress: false,
      fixScroll: false,
      offset: 0,
      scrollViewTop: 0,
      randomImages: getRandomImages(),
      randomFacts: getRandomFacts(),
      updateInProgress: false,
      showNews: false,
      size: { width, height }
    }
  }

  handleTabFocus = () => {

    this.myRef.getNode().scrollTo({
      y: height,
      animated: true,
    });
  }

  componentWillMount = async () => {
    try {
      const feeds = await getFeeds(this.props.filter);
      this.props.changeFeeds(feeds);
    } catch (error) {
      console.log(error);
    }
  }

  keyExtractor = (item, index) => item.id.toString();

  handleFeedScroll = async (event) => {
    try {
      const currentOffset = event.nativeEvent.contentOffset.y;
      if ((currentOffset < 0 || currentOffset === 0) && this.state.fixScroll && !this.state.fetchInProgress) {
        this.setState({ updateInProgress: true });
        const feeds = await getFeeds(this.props.filter);
        this.props.changeFeeds(feeds);
        this.setState({ updateInProgress: false });
      }

      const fetchMore = event.nativeEvent.contentSize.height
        <= (event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 400);

      if (this.props.feeds && this.props.feeds.length > 0 && fetchMore && !this.state.fetchInProgress) {
        this.setState({ fetchInProgress: true });
        const skip = this.props.feeds[this.props.feeds.length - 1].id;
        const filter = this.props.filter;
        const moreFeeds = await getFeedsMoreFeeds(filter, skip);
        const newFeeds = [...this.props.feeds, ...moreFeeds];
        this.props.changeFeeds(newFeeds);
        this.setState({ fetchInProgress: false });
      }
    } catch (error) {
      this.setState({ fetchInProgress: false });
    }
  }

  handleScrollEndDrag = (event) => {
    try {
      const currentOffset = event.nativeEvent.contentOffset.y;
      if (currentOffset > height - height / 3) {
        this.myRef.getNode().scrollTo({
          y: height,
          animated: true,
        });
        this.setState({ fixScroll: true, enableScroll: false });

      }
    } catch (error) {
      console.log(error);
    }
  }

  handleScroll = async (event) => {
    try {
      const fetchMore = event.nativeEvent.contentSize.height
        <= (event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height + 400);

      const currentOffset = event.nativeEvent.contentOffset.y;
      const direction = currentOffset > this.state.offset ? 'up' : 'down';
      if (currentOffset >= height - 20 && direction === 'up' && !this.state.fixScroll) {
        this.setState({ fixScroll: true, scrollHeight: height, enableScroll: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View
          resizeMode='stretch'
          style={styles.serviceImage}
        >

          <Animated.ScrollView
            onScroll={this.handleScroll.bind(this)}
            scrollEnabled={this.state.enableScroll}
            contentContainerStyle={[{ height: height * 2 }]}
            scrollEventThrottle={1}
            onScrollEndDrag={this.handleScrollEndDrag.bind(this)}
            ref={c => (this.myRef = c)}>

            <Carousel
              delay={2000}
              style={[this.state.size, { zIndex: 1, }]}

            >


              {this.state.randomImages.map((item, key) => (
                <ImageBackground
                  resizeMode='cover'
                  style={{ flex: 1, width, height, }}
                  source={item}
                  key={key}
                >
                  <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                    height: this.state.carouselHeight,

                  }}>
                    <Text style={styles.facts}>{this.state.randomFacts[key]}</Text>
                  </View>

                </ImageBackground>
              ))
              }
            </Carousel>
            <View style={{

              padding: 10,
              position: 'absolute',
              zIndex: 100,
            }}>
              <DateHeader />
              <Text style={styles.header}>{strings('newsfeed.header').toUpperCase()}</Text>
            </View>

            <Animated.ScrollView
              scrollEnabled={!this.state.enableScroll}
              onScrollEndDrag={this.handleFeedScroll.bind(this)}
              scrollEventThrottle={1}
              contentContainerStyle={[styles.contentContainer, { minHeight: height, },]}

            >
              {this.props.feeds && this.props.feeds.length > 0 ?

                <View style={{ flex: 1, backgroundColor: 'rgba(237, 237, 237, 1)', marginBottom: 55, paddingTop: 40 }}>
                  {this.state.updateInProgress ? <View
                    style={{ height: 50, justifyContent: 'center', alignItems: 'center', flex: 1 }}
                  >
                    <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>Getting updates. Please wait...</Text>
                  </View> : null}
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
        </View>
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
    textAlign: 'center',
  },
  contentContainer: { flexGrow: 1, },
  serviceImage: {
    flexGrow: 1,
    height,
    backgroundColor: '#FFFFFF'
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
