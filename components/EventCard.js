import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    ImageBackground
} from 'react-native';
export class EventCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFF', margin: 10 }}>

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
                        <Text style={{ flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }}>{this.props.item.source}</Text>
                    </View>
                </ImageBackground>

                <View style={{ flex: 1, padding: 5, textAlign: 'center' }}>

                    <View style={{ flex: 1, flexWrap: 'wrap', padding: 10, }}>
                        <Text style={{ flex: 1, flexWrap: 'wrap', fontWeight: 'bold' }}>{this.props.item.title}</Text>
                        <Text style={{ flexWrap: 'wrap', }}>{this.props.item.pub_date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    eventsActive: {
        backgroundColor: '#3c8fde',
        color: '#FFF',
        height: 25
    },
    source: {
        width: 80,
        margin: 0,
        padding: 4,
        right: 0,
        textAlign: 'center',
        top: -10
    }
});