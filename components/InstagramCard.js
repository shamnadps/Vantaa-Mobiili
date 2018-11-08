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
import { format } from 'date-fns';

export class InstagramCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.item.image_url);
        return (
            <View style={{
                shadowOpacity: 0.50,
                shadowRadius: 3,
                shadowOffset: { height: 0, width: 0 },
                borderRadius: 10, backgroundColor: '#FFF', margin: 10,
                elevation: 10,
            }}>

                <View style={{ paddingTop: 10, flex: 1, flexDirection: 'row', paddingLeft: 10, textAlign: 'center', }}>
                    <Image style={{ width: 50, borderRadius: 25, padding: 10 }}
                        resizeMode='cover'
                        source={{
                            uri: this.props.item.author_thumbnail
                        }} />
                    <View style={{ flex: 1, padding: 5, }}>
                        <Text style={[styles.walsheim, styles.walsheimBold, { flexWrap: 'wrap', }]}>{this.props.item.author}</Text>
                        <Text style={[styles.walsheim, { flexWrap: 'wrap', }]}>@{this.props.item.author}</Text>
                    </View>
                    <View style={[styles.source, styles.instagramActive,]}>
                        <Text style={[styles.walsheim, { flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }]}>{this.props.item.source}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, textAlign: 'center' }}>
                    <Image style={{ flex: 1, width: '100%', marginTop: 10, height: 400 }}
                        resizeMode='stretch'
                        source={{
                            uri: this.props.item.image_url
                        }} />
                    <Text style={[styles.walsheim, styles.walsheimBold, { padding: 10, }]}>{this.props.item.likes} likes </Text>
                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingTop: 10 }}>
                        <Text style={[styles.walsheim, { flex: 1, }]}>
                            <Text style={[styles.walsheim, styles.walsheimBold,]}>{this.props.item.author} </Text>
                            {this.props.item.description}
                        </Text>

                    </View>

                    <Text style={[styles.walsheim, { padding: 10, opacity: 0.8, flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end' }]}>{format(this.props.item.pub_date, 'DD MMMM HH:mm')}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    instagramActive: {
        backgroundColor: '#43368d',
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