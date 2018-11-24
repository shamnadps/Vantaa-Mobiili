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
  TouchableHighlight,
  Linking,
  Dimensions
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { ContactCard } from '../components/ContactCard';
import { ServiceCard } from '../components/ServiceCard';
import { strings } from '../locales/i18';
import { connect } from 'react-redux';
import { changeLanguage } from '../redux/reducer';
const { height, width } = Dimensions.get('window');

class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>
          <Image
            source={
              require('../assets/images/background.png')
            }
            style={{ position: 'absolute', width, height: height + 300 }}
          />

          <Text style={styles.header}>{strings('resources.header').toUpperCase()}</Text>

          <Text style={styles.contact}>{strings('resources.contactHeader')}</Text>
          <View style={styles.contactSection}>
            <ContactCard
              imageUrl={require('../assets/images/chat-icon.png')}
              text={strings('resources.chat')}
            />
            <ContactCard
              imageUrl={require('../assets/images/contact-icon.png')}
              text={strings('resources.contact')}
              link={'http://www.vantaa.fi/hallinto_ja_talous/tietoa_vantaasta/yhteystiedot'} />
            <ContactCard
              imageUrl={require('../assets/images/feedback-icon.png')}
              text={strings('resources.feedback')}
              link={'https://asiointi.vantaa.fi/anna-palautetta#/'} />
          </View>

          <Text style={styles.services}>{strings('resources.serviceHeader')}</Text>
          <View style={styles.serviceSection}>
            <ServiceCard
              text={strings('resources.services.vantaa.title')}
              link={strings('resources.services.vantaa.link')}
            />
            <ServiceCard
              text={strings('resources.services.työpaikat.title')}
              link={strings('resources.services.työpaikat.link')}
            />
          </View>
          <View style={styles.serviceSection}>
            <ServiceCard
              text={strings('resources.services.palvelukartta.title')}
              link={strings('resources.services.palvelukartta.link')}
            />
            <ServiceCard
              text={strings('resources.services.tapahtumat.title')}
              link={strings('resources.services.tapahtumat.link')}
            />
          </View>
          <View style={styles.serviceSection}>
            <ServiceCard
              text={strings('resources.services.matkailu.title')}
              link={strings('resources.services.matkailu.link')}
            />
            <ServiceCard
              text={strings('resources.services.asiointi.title')}
              link={strings('resources.services.asiointi.link')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
});

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    color: '#FFFFFF',
    marginTop: 40,
    marginLeft: 10,
    fontSize: 26,
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    fontWeight: Platform.OS === 'ios' ? "bold" : "100",
  },
  contact: {
    color: '#FFFFFF',
    marginTop: 15,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    fontWeight: Platform.OS === 'ios' ? "bold" : "100",

  },
  contactSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  services: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    fontWeight: Platform.OS === 'ios' ? "bold" : "100",

  },
  serviceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
