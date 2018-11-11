import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
    ImageBackground,
    Platform
} from 'react-native';
export class ServiceCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.serviceCard} onPress={() => Linking.openURL(this.props.link)}>
                <View
                    resizeMode='cover'
                    style={[styles.serviceImage, { backgroundColor: this.props.color ? this.props.color : '#F9EB61' }]}
                >
                    <View style={styles.serviceTextCard}>
                        <Text style={styles.serviceText}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableOpacity >);
    }
}
const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E5E5E5',
    },
    services: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    serviceSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceCard: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#EEEEEE',
        shadowOpacity: 0.50,
        shadowRadius: 3,
        shadowOffset: { height: 0, width: 0 },
        elevation: 10
    },
    serviceImage: {
        flex: 1,
        justifyContent: 'space-between',
        height: 80,

    },
    serviceTextCard: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: 60,
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    },
    serviceText: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    },
    walsheim: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Bold",
    },
    walsheimBold: {
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    }
});