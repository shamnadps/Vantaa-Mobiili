import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { format } from 'date-fns';
import { getCurrentLocale } from '../locales/i18';

import en from 'date-fns/locale/en';
import fi from 'date-fns/locale/fi';
import sv from 'date-fns/locale/sv';
const locales = { en, fi, sv };

export class DateHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={styles.contact}>{format(new Date(), 'dddd, MMMM DD', { locale: locales[getCurrentLocale()] }).toUpperCase()}</Text>
        );
    }
}

const styles = StyleSheet.create({
    contact: {
        color: '#FFFFFF',
        marginTop: 40,
        marginLeft: 20,
        fontSize: 13,
        fontFamily: Platform.OS === 'ios' ? "GT Walsheim" : "GT-Walsheim-Regular",
    },
});