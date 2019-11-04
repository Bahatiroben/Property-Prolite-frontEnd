import types from '../actions/actionTypes';
export default function navReducer(state = [{to:'/', caption: 'Home'}], action) {
    switch(action.type) {
        case types.LOAD_NAV:
            return action.navList;
        default:
            return state
    }
}