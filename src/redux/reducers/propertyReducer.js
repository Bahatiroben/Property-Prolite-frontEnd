import types from '../actions/actionTypes';
export default function propertyReducer(state=[], action) {
    switch(action.type) {
        case types.GET_PROPERTIES:
            return action.properties
        default:
            return state
    }
}