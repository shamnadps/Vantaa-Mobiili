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

          <Text style={styles.header}>{strings('resources.header')}</Text>

          <Text style={styles.contact}>{strings('resources.contactHeader')}</Text>
          <View style={styles.contactSection}>
            <ContactCard
              imageUrl={require('../assets/images/chat-icon.png')}
              text={strings('resources.chat')}
              link={''} />
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
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.vantaa')}
              link={'http://www.vantaa.fi'}
            />
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.palvelukartta')}
              color='#87Dbe8'
              link={'http://kartta.vantaa.fi'}
            />
          </View>
          <View style={styles.serviceSection}>
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.sivistysvantaa')}
              color='#f2a6db'
              link={'http://www.sivistysvantaa.fi/sivistysvantaa/index.html'}
            />
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.jumppaliput')}
              color='#c2a6e3'
              link={'https://jumppaliput.vantaa.fi/app/'}
            />
          </View>
          <View style={styles.serviceSection}>
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.lasten')}
              color='#d9d9d6'
              link={'https://kulttuuriliput.vantaa.fi/app/consumer'}
            />
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.tapahtumat')}
              link={'http://www.vantaa.fi/tapahtumienvantaa'}
            />
          </View>
          <View style={styles.serviceSection}>
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.matkailu')}
              color='#84ccf8'
              link={'https://www.visitvantaa.fi'}
            />
            <ServiceCard
              imageUrl={require('../assets/images/cutiepie.jpg')}
              text={strings('resources.services.asiointi')}
              color='#ffa3b5'
              link={'http://www.vantaa.fi/asioi_verkossa'}
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
