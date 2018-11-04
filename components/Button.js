import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.clicked}>
                <Text style={[styles.button, this.props.active && getActiveSyle(this.props.type)]}>{this.props.text}</Text>
            </TouchableOpacity>);
    }
}

getActiveSyle = (type) => {
    switch (type) {
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
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFF',
        borderColor: '#EEE',
        padding: 10,
        margin: 5,
        fontWeight: 'bold',
        fontSize: 10,
        color: '#3c8fde'
    },
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
    }
});