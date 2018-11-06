import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
import { format } from 'date-fns';

export class VantaaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    getBackgroundColor = (source) => {
        switch (source) {
            case 'instagram':
                return styles.instagramActive;
            case 'youtube':
                return styles.youtubeActive;
            case 'twitter':
                return styles.twitterActive;
            case 'facebook':
                return styles.facebookActive;
            default:
                return styles.activeButton;
        }
    }

    getImageForVantaa = (image_url) => {
        return image_url
            ? <Image style={{ width: 120, }}
                resizeMode='cover'
                source={{
                    uri: this.props.item.source === 'vantaa'
                        ? 'http://' + image_url
                        : image_url
                }} />
            : <Image style={{ flex: 1, width: 120, height: 130 }}
                resizeMode='cover'
                source={require('../assets/images/cutiepie.jpg')} />
    }
    render() {
        return (
            <View style={{
                flex: 1, shadowOpacity: 0.50,
                shadowRadius: 3,
                shadowOffset: { height: 0, width: 0 },
                borderRadius: 10, flexDirection: 'row', backgroundColor: '#FFF', margin: 10
            }}>

                {this.getImageForVantaa(this.props.item.image_url)}

                <View style={{ flex: 1, alignItems: 'flex-end', textAlign: 'center', }}>
                    <View style={[styles.source, this.getBackgroundColor(this.props.item.source), { color: '#FFF' }]}>
                        <Text style={{ textAlign: 'center', margin: 0, color: '#FFF' }}>{this.props.item.source}</Text>
                    </View>
                    <View style={{ flex: 1, flexWrap: 'wrap', height: 100, }}>
                        <Text style={{ flex: 1, padding: 5, flexWrap: 'wrap', }}>{this.props.item.title}</Text>
                        <Text style={{ padding: 5, opacity: 0.8, flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end' }}>{format(this.props.item.pub_date, 'DD MMMM HH:mm')}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    activeButton: {
        backgroundColor: '#3c8fde',
        color: '#FFF'
    },
    instagramActive: {
        backgroundColor: '#43368d',
        color: '#FFF'
    },
    youtubeActive: {
        backgroundColor: '#ff8f1c',
        color: '#FFF'
    },
    facebookActive: {
        backgroundColor: '#ba0d2e',
        color: '#FFF'
    },
    twitterActive: {
        backgroundColor: '#007b5f',
        color: '#FFF'
    },
    source: {
        width: 80,
        margin: 0,
        padding: 4,
        textAlign: 'center',
        top: -10
    }
});