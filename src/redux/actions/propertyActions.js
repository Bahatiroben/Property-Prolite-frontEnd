import { toast } from 'react-toastify';
import types from "./actionTypes";
toast.configure()
const baseUrl = process.env.baseUrl
export function loadPropertiesSuccess (properties){
    return { 
        type: types.GET_PROPERTIES,
        properties: properties.data
     }
}
export function loadProperties () {
        return (dispatch) => {
            const token = localStorage.getItem('ProliteToken');
            return fetch(`${baseUrl}/api/v1/property`, {headers: {Authorization: `Bearer ${token}`}}).then(data=>data.json()).then((properties) => {
                dispatch(loadPropertiesSuccess(properties))
            }).catch(err => {
                throw err
            })
        }
    }

    export function createProperty (property) {
        return (dispatch) => {
            const token = localStorage.getItem('ProliteToken');
            return fetch(`${baseUrl}/api/v1/property/`, {
                "method": "POST",
                "body": property,
                "headers": {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res)=>res.json()).then((data)=>{
                if (data.status === 200) {
                    dispatch({type: types.ADD_PROPERTY,
                        property: data});
                    return {status: 200}
                }
                else if (data.status === 409) {
                    toast.info("Property already exist")
                    return {status: 409}
                }
                else if (data.status === 500) {
                    toast.info("Something bad happened. Try to login")
                    return {status: 500}
                }
            }).catch((error) => alert(error))
        }
    }