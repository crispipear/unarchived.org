import {combineReducers} from 'redux';
import siteReducer from './siteReducer';
import mapReducer from './mapReducer';

export default combineReducers({
    site: siteReducer,
    map: mapReducer
})