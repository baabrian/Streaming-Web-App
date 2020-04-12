import { combineReducers } from 'redux';
import authReducer from './authReducer';

//form reducer
import { reducer as formReducer, } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
});