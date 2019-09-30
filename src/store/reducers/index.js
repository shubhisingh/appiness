import {combineReducers} from 'redux';
import { authReducers } from './authReducers';
import { employeeReducers } from './employeeReducers';

const rootReducer = combineReducers({
    authReducers,
    employeeReducers
});

export default rootReducer;

