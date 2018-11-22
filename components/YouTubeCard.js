import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    Platform,
    AppState,
    WebView,
    Clipboard,
} from 'react-native';
import { format } from 'date-fns';
import YouTube from 'react-native-youtube'
import Toast from 'react-native-simple-toast';

export class YouTubeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        height: 215
    }

    handleReady = () => {
        setTimeout(() => this.setState({ height: 216 }), 200);
    }

    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        this.setState({ appState: nextAppState });
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
                    <View style={{ paddingTop: 10, flex: 1, flexDirection: 'row', paddingLeft: 10, textAlign: 'center', }}>
                        <Image style={{ width: 50, padding: 10 }}
                            resizeMode='cover'
                            source={{
                                uri: this.props.item.author_thumbnail
                            }} />
                        <View style={{ flex: 1, padding: 5, }}>
                            <Text style={[styles.walsheim, styles.walsheimBold, { flexWrap: 'wrap', }]}>{this.props.item.author}</Text>
                        </View>
                        <View style={[styles.source, styles.youtubeActive,]}>
                            <Text style={[styles.walsheim, { flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }]}>{this.props.item.source}</Text>
                        </View>
                    </View >
                </TouchableOpacity>
                <View style={{ flex: 1, textAlign: 'center' }}>
                    {/* <Image style={{ flex: 1, width: '100%', marginTop: 10, height: 400 }}
                        resizeMode='stretch'
                        source={{
                            uri: this.props.item.image_url
                        }} /> */}
                    {this.state.appState == 'active' &&
                        <WebView
                            style={{ flex: 1, height: 300, marginTop: 10 }}
                            javaScriptEnabled={true}
                            source={{ uri: 'https://www.youtube.com/embed/' + this.props.item.video_id + '?rel=0&autoplay=0&showinfo=0&controls=0' }} />
                    }
                    {/* <YouTube
                        ref={(component) => { this._youTubePlayer = component }}
                        apiKey='AIzaSyA-Bd6OENpoKj490VZJuv65GnOQIlgZjho'
                        videoId={this.props.item.video_id}           // The YouTube video ID
                        play={false}                     // control playback of video with true/false
                        playsInline={true}              // control whether the video should play full-screen or inline
                        loop={true}                    // control whether the video should loop when ended

                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}
                        onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}

                        style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
                    /> */}
                    <View style={{ flex: 1, padding: 10, flexDirection: 'row', flexWrap: 'wrap', padding: 5, }}>
                        <Text style={[styles.walsheim, { flex: 1, flexWrap: 'wrap', }]}>
                            <Text style={[styles.walsheim, styles.walsheimBold, { flex: 1, }]}>{this.props.item.author} </Text>
                            {this.props.item.description}
                        </Text>

                    </View>
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
            </View >
        );
    }
}
const styles = StyleSheet.create({

    youtubeActive: {
        backgroundColor: '#ba0d2e',
        color: '#FFF',
        height: 25
    },
    source: {
        width: 80,
        margin: 0,
        padding: 4,
        right: 0,
        textAlign: 'center',
        top: -20
    },
    walsheim: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Regular",
    },
    walsheimBold: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    }
});