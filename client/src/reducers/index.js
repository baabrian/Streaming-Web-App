import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

//form reducer
import { reducer as formReducer, } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    stream: streamReducer,
    form: formReducer,
});