import types from '../actions/actionTypes';
export default function userReducer(state={user: {}}, action) {
    switch(action.type) {
        case types.REGISTER:
            return {user: action.user};
        case types.SIGN_IN:
            return {user: action.user};
        default:
            return state
    }
}