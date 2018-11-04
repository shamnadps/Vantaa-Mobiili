import { CHANGE_LANGUAGE, FETCH_FEEDS } from './constants';

export const changeLanguage = (language) => {
    return { type: CHANGE_LANGUAGE, payLoad: language };
};

export const updateFeeds = (feeds) => {
    return { type: FETCH_FEEDS, payLoad: feeds };
};