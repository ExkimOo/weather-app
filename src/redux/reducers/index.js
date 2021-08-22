import { combineReducers } from 'redux';

import locationReducer from './location';
import weatherReducer from './weather';

const rootReducer = combineReducers({
    location: locationReducer,
    weather: weatherReducer,
});

export default rootReducer;