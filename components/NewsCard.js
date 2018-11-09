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
                return <TouchableOpacity><VantaaCard item={item} /></TouchableOpacity>;
            case 'twitter':
                return <TouchableOpacity ><TwitterCard item={item} /></TouchableOpacity>;
            case 'instagram':
                return <TouchableOpacity><InstagramCard item={item} /></TouchableOpacity>;
            case 'events':
                return <TouchableOpacity><EventCard item={item} /></TouchableOpacity>;
            case 'youtube':
                return <YouTubeCard item={item} />;
            case 'facebook':
                return <TouchableOpacity ><FaceBookCard item={item} /></TouchableOpacity>;
            default:
                return <TouchableOpacity><VantaaCard item={item} /></TouchableOpacity>;
        }
    }
    render() {
        return (
            this.getCards(this.props.item)
        );
    }
}