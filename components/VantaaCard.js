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

export class VantaaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                shadowOpacity: 0.50,
                shadowRadius: 3,
                shadowOffset: { height: 0, width: 0 },
                borderRadius: 10, backgroundColor: '#FFF', margin: 10, elevation: 10,
            }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    textAlign: 'center',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>

                    <View style={[styles.source, styles.activeButton,]}>
                        <Text style={[styles.walsheim, { flex: 1, textAlign: 'center', margin: 0, color: '#FFF' }]}>{this.props.item.source}</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 0, flex: 1, flexDirection: 'row', paddingLeft: 10, textAlign: 'center', }}>

                    {this.props.item.image_url ?
                        <Image style={{ width: 100, height: 100, }}
                            resizeMode='cover'
                            source={{
                                uri: 'http://' + this.props.item.image_url
                            }} /> :
                        <Image style={{ width: 70, height: 70, }}
                            resizeMode='cover'
                            source={
                                require('../assets/images/icon.png')
                            } />
                    }
                    <View style={{ flex: 1, padding: 5, paddingLeft: 10 }}>
                        <Text style={[styles.walsheim, { flexWrap: 'wrap', opacity: 0.7 }]}>Author / page headline</Text>
                        <Text style={[styles.walsheimBold, { flexWrap: 'wrap', }]}>{this.props.item.title}</Text>
                    </View>

                </View>

                <View style={{ flex: 1, padding: 5, textAlign: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 10, flexWrap: 'wrap', padding: 5, }}>
                        <Text style={[styles.walsheim, { flex: 1, flexWrap: 'wrap', }]}>{this.props.item.description}</Text>

                    </View>
                    <Text style={[styles.walsheim, { padding: 5, opacity: 0.8, flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-end' }]}>{format(this.props.item.pub_date, 'DD MMMM HH:mm')}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    activeButton: {
        backgroundColor: '#3c8fde',
        color: '#FFF',
    },

    source: {
        width: 80,
        margin: 0,
        padding: 4,
        right: 0,
        textAlign: 'center',
        marginTop: -10
    },
    walsheim: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Regular",
    },
    walsheimBold: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    }
});