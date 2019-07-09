import { combineReducers } from 'redux';
//////////Reducers//////////////////////
import {system} from './system.reducer';
////////////////////////////////////////
const rootReducer = combineReducers(
    {
        system
    }
);
export default rootReducer;