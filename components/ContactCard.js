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
                    <Image style={{ padding: 5, marginTop: 10, }} source={this.props.imageUrl} />
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>);
    }
}
const styles = StyleSheet.create({
    contactSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        fontFamily: "GT Walsheim",
    },
    section: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#FFF',

        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        shadowOpacity: 0.50,
        shadowRadius: 3,
        shadowOffset: { height: 0, width: 0 },
        elevation: 20,
        fontFamily: "GT Walsheim",
    },
    sectionView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "GT Walsheim",
    },
    text: {
        marginTop: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: "GT Walsheim",
        fontWeight: 'bold',
        padding: 5,

    },
});