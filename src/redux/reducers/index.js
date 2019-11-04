import { combineReducers } from 'redux';
import properties from './propertyReducer';
import users from './userReducer';
import navList from './navReducer'

const rootReducer = combineReducers({
    properties,
    users,
    navList
});

export default rootReducer;