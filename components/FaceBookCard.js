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

export class FaceBookCard extends React.Component {
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
                borderRadius: 10, backgroundColor: '#FFF', margin: 10, elevation: 10,
            }}>

                <View style={{ paddingTop: 10, flex: 1, flexDirection: 'row', paddingLeft: 10, textAlign: 'center', }}>
                    <Image style={{ width: 50, borderRadius: 25, padding: 10 }}
                        resizeMode='cover'
                        source={{
                            uri: this.props.item.author_thumbnail
                        }} />
                    <View style={{ flex: 1, padding: 5, }}>
                        <Text style={{ flexWrap: 'wrap', fontWeight: 'bold' }}>{this.props.item.author}</Text>
                    </View>
                    <View style={[styles.source, styles.facebookActive,]}>
                        <Text style={{ flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }}>{this.props.item.source}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, textAlign: 'center' }}>
                    {this.props.item.image_url ?
                        <Image style={{ flex: 1, width: '100%', marginTop: 10, height: 300 }}
                            resizeMode='contain'
                            source={{
                                uri: this.props.item.image_url
                            }} /> : null}
                    <View style={{ flex: 1, flexDirection: 'row', padding: 10, }}>
                        <Text style={{ flex: 1, }}>
                            <Text style={{ fontWeight: 'bold', }}>{this.props.item.author} </Text>
                            {this.props.item.description}
                        </Text>

                    </View>

                    <Text style={{ padding: 10, opacity: 0.8, flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end' }}>{format(this.props.item.pub_date, 'DD MMMM HH:mm')}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    facebookActive: {
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
    }
});