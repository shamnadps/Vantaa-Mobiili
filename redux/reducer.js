import { CHANGE_LANGUAGE, FETCH_FEEDS, CHANGE_FILTER } from './constants';
import { setLocale } from '../locales/i18';
import axios from 'axios';

const initialState = {
    language: 'fi',
    feeds: [],
    filter: ['FACEBOOK',
        'TWITTER',
        'INSTAGRAM',
        'YOUTUBE',
        'EVENTS',
        'VANTAA',
        'SIVITYSVANTAA']
}
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            setLocale(action.payload);
            return { ...state, language: action.payload };

        case FETCH_FEEDS:
            return { ...state, feeds: action.payload };
        case CHANGE_FILTER:
            return { ...state, filter: action.payload };

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

export function changeFilter(filter) {
    return {
        type: CHANGE_FILTER,
        payload: filter
    };
}

export async function getFeeds(filter) {
    try {
        const feeds = await axios.get('https://vantaa-black-panther.herokuapp.com/api/feeds?type=' + filter.join(','));
        return feeds.data;
    } catch (error) {
        console.log('Failed to get feeds', error);
    }
}

export async function getFeedsMoreFeeds(filter, skip) {
    try {
        const feeds = await axios.get('https://vantaa-black-panther.herokuapp.com/api/feeds?type=' + filter.join(',') + '&skip=' + skip);
        return feeds.data;
    } catch (error) {
        console.log('Failed to get feeds', error);
    }
}
export default mainReducer;