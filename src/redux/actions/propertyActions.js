import types from "./actionTypes";

export function loadPropertiesSuccess (properties){
    return { 
        type: types.GET_PROPERTIES,
        properties: properties.data
     }
}
export function loadProperties () {
        return (dispatch) => {
            const token = localStorage.getItem('ProliteToken');
            return fetch("http://localhost:5001/api/v1/property", {headers: {Authorization: `Bearer ${token}`}}).then(data=>data.json()).then((properties) => {
                dispatch(loadPropertiesSuccess(properties))
            }).catch(err => {
                throw err
            })
        }
    }