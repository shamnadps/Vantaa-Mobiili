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
export class ServiceCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.serviceCard} onPress={() => Linking.openURL(this.props.link)}>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.serviceImage}
                    source={this.props.imageUrl} >
                    <View style={styles.serviceTextCard}>
                        <Text style={styles.serviceText}>{this.props.text}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>);
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
    },
    serviceImage: {
        flex: 1,
        justifyContent: 'space-between',
        height: 120,
    },
    serviceTextCard: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: 60,
        marginTop: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    serviceText: {
        fontWeight: 'bold'
    }
});