import types from "./actionTypes";

export function loadNav (data) {
        return (dispatch) => dispatch({type: types.LOAD_NAV, navList: data})
        
    }