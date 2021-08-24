import { combineReducers } from 'redux';

import locationReducer from './location';
import weatherReducer from './weather';
import unitReducer from './unit';

const rootReducer = combineReducers({
    location: locationReducer,
    weather: weatherReducer,
    unit: unitReducer,
});

export default rootReducer;