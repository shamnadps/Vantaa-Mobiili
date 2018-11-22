import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    ImageBackground,
    Platform,
    Clipboard,
} from 'react-native';
import { format } from 'date-fns';
import Toast from 'react-native-simple-toast';

export class EventCard extends React.Component {
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

    onCopyPressed = (url) => {
        Clipboard.setString(url);
        Toast.showWithGravity('Copied to clipboard.', Toast.SHORT, Toast.CENTER)
    }

    render() {
        return (
            <View style={{
                shadowOpacity: 0.50,
                shadowRadius: 3,
                shadowOffset: { height: 0, width: 0 },
                borderRadius: 10, backgroundColor: '#FFF', margin: 10, elevation: 10,
            }}>
                <TouchableOpacity onPress={() => this.onPressHandler(this.props.item.page_link)}>
                    <ImageBackground style={{
                        flex: 1, height: 250,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                        resizeMode='stretch'
                        source={{
                            uri: this.props.item.image_url
                        }}
                    >
                        <View style={[styles.source, styles.eventsActive]}>
                            <Text style={[styles.walsheim, { flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }]}>{this.props.item.source}</Text>
                        </View>
                    </ImageBackground>

                </TouchableOpacity>
                <View style={{ flex: 1, padding: 5, textAlign: 'center' }}>
                    <TouchableOpacity onPress={() => this.onPressHandler(this.props.item.page_link)}>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 10, }}>
                            <Text style={[styles.walsheim, { flex: 1, flexWrap: 'wrap', fontWeight: 'bold' }]}>{this.props.item.title}</Text>

                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={[styles.walsheim, { padding: 10, opacity: 0.8, width: '90%', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end' }]}>
                            {format(this.props.item.pub_date, 'DD MMMM HH:mm')}
                        </Text>
                        <TouchableOpacity onPress={() => this.onCopyPressed(this.props.item.page_link)}>
                            <View style={[{ padding: 10, marginRight: 10, alignItems: 'flex-end', justifyContent: 'flex-end' }]}>
                                <Image
                                    resizeMode='contain'
                                    source={
                                        require('../assets/images/copy_icon.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    eventsActive: {
        backgroundColor: '#db3db0',
        color: '#FFF',
        height: 25,
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    },
    source: {
        width: 80,
        margin: 0,
        padding: 4,
        right: 0,
        textAlign: 'center',
        top: -10,
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    },
    walsheim: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Regular",
    },
    walsheimBold: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    }
});