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
            this.props.text ? (
                <TouchableOpacity style={styles.serviceCard} onPress={() => Linking.openURL(this.props.link)}>
                    <View
                        resizeMode='cover'
                        style={[styles.serviceImage]}
                    >
                        <View style={styles.serviceTextCard}>
                            <Text style={styles.serviceText}>{this.props.text.toUpperCase()}</Text>
                        </View>
                    </View>
                </TouchableOpacity >)
                : (
                    <TouchableOpacity style={styles.serviceCardEmpty}>
                        <View style={[styles.serviceImageEmpty]}>
                        </View>
                    </TouchableOpacity>
                )

        );
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
    serviceCardEmpty: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10,
    },
    serviceImage: {
        flex: 1,
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#FFFFFF'

    },
    serviceImageEmpty: {
        flex: 1,
        justifyContent: 'space-between',
        height: 60,

    },
    serviceTextCard: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",
    },
    serviceText: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",

    },
    walsheim: {
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Normal",
    },
    walsheimBold: {
        fontWeight: Platform.OS === 'ios' ? "bold" : "100",
    }
});