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
import { DateHeader } from '../components/DateHeader';
import { connect } from 'react-redux';
import { getFeeds } from '../redux/reducer';
import { changeLanguage, changeFeeds } from '../redux/reducer';
import { NewsCard } from '../components/NewsCard';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount = async () => {
    const feeds = await getFeeds(this.props.filter);
    this.props.changeFeeds(feeds);
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
          <DateHeader />
          <Text style={styles.header}>{strings('newsfeed.header')}</Text>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{ flex: 1, backgroundColor: 'rgba(237, 237, 237, 1)', marginBottom: 100, padding: 10 }}>
              {
                this.props.feeds.map((item) => {
                  return (
                    <NewsCard key={item.id} item={item} />
                  );
                })}
            </View>
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
  changeFeeds: (feeds) => dispatch(changeFeeds(feeds))
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
