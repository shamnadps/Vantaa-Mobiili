import { CHANGE_LANGUAGE, FETCH_FEEDS } from './constants';
import { setLocale } from '../locales/i18';
import axios from 'axios';

initialState = {
    language: 'fi',
    advertisements: []
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            state.language = action.payload;
            setLocale(action.payload);
            return state;
        case FETCH_FEEDS:
            state.advertisements = action.payload;
            return state;
        default:
            return state;
    }
}

export function changeLanguage(language) {
    return {
        type: CHANGE_LANGUAGE,
        payload: language
    };
}

export function changeFeeds(feeds) {
    return {
        type: FETCH_FEEDS,
        payload: feeds
    };
}

export async function getFeeds() {
    try {
        const advertisements = await axios.get('https://api-prod.superlaiffi.fi/advertisements');
        return advertisements.data;
    } catch (error) {
        console.log('Failed to get advertisments', error);
    }
}