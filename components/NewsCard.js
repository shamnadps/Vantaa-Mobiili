import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
import { VantaaCard } from './VantaaCard';
import { TwitterCard } from './TwitterCard';
import { InstagramCard } from './InstagramCard';
import { EventCard } from './EventCard';
import { YouTubeCard } from './YouTubeCard';
import { FaceBookCard } from './FaceBookCard';

export class NewsCard extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressHandler = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    getCards = (item) => {
        switch (item.source) {
            case 'vantaa':
                return <VantaaCard item={item} />;
            case 'twitter':
                return <TwitterCard item={item} />;
            case 'instagram':
                return <InstagramCard item={item} />;
            case 'events':
                return <EventCard item={item} />;
            case 'youtube':
                return <YouTubeCard item={item} />;
            case 'facebook':
                return <FaceBookCard item={item} />;
            default:
                return <VantaaCard item={item} />;
        }
    }
    render() {
        return (
            this.getCards(this.props.item)
        );
    }
}