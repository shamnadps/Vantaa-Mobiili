import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
export class ContactCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.section} onPress={() => Linking.openURL(this.props.link)}>
                <View style={styles.sectionView}>
                    <Image source={this.props.imageUrl} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>);
    }
}
const styles = StyleSheet.create({
    contactSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#FFF',
        borderWidth: 2,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E5E5E5',
        margin: 5,
    },
    sectionView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});