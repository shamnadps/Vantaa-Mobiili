import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
export class TwitterCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ backgroundColor: '#FFF', margin: 10 }}>

                <View style={{ paddingTop: 10, flex: 1, flexDirection: 'row', paddingLeft: 10, textAlign: 'center', }}>
                    <Image style={{ width: 50, borderRadius: 25, padding: 10 }}
                        resizeMode='cover'
                        source={{
                            uri: this.props.item.author_thumbnail
                        }} />
                    <View style={{ flex: 1, padding: 5, }}>
                        <Text style={{ flexWrap: 'wrap', fontWeight: 'bold' }}>{this.props.item.author}</Text>
                        <Text style={{ flexWrap: 'wrap', }}>@{this.props.item.author}</Text>
                    </View>
                    <View style={[styles.source, styles.twitterActive,]}>
                        <Text style={{ flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }}>{this.props.item.source}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, padding: 5, textAlign: 'center' }}>

                    <View style={{ flex: 1, flexWrap: 'wrap', padding: 5, }}>
                        <Text style={{ flex: 1, flexWrap: 'wrap', }}>{this.props.item.description}</Text>
                        <Text style={{ flexWrap: 'wrap', marginTop: 10, marginBottom: 10 }}>{this.props.item.pub_date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    twitterActive: {
        backgroundColor: '#007b5f',
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
    }
});