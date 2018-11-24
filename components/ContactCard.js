import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    Platform
} from 'react-native';
export class ContactCard extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressHandler = (url) => {
        if (url) {
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err));
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.section} onPress={() => this.onPressHandler(this.props.link)}>
                <View style={styles.sectionView}>
                    <Image style={{ padding: 5, marginTop: 10, }} source={this.props.imageUrl} />
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>);
    }
}
const styles = StyleSheet.create({
    contactSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",
    },
    section: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#FFF',

        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        shadowOpacity: 0.50,
        shadowRadius: 3,
        shadowOffset: { height: 0, width: 0 },
        elevation: 20,
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",
    },
    sectionView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",
    },
    text: {
        marginTop: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",
        padding: 5,

    },
});