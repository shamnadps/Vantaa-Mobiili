import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
export class DateHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={styles.contact}>SATURDAY, NOVEMBER 03</Text>
        );
    }
}

const styles = StyleSheet.create({
    contact: {
        color: '#FFFFFF',
        marginTop: 40,
        marginLeft: 20,
        fontSize: 13,
    },
});