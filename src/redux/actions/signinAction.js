import types from "./actionTypes";
const baseUrl = process.env.baseUrl
export function signinSuccess ({email, password}){
    return { 
        type: types.GET_PROPERTIES,
        user: {email, password}
     }
}
export function signin (payload) {
        return (dispatch) => {
            return fetch(`${baseUrl}/api/v1/auth/signin`, { //
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(payload),
        })
            .then(data=>data.json()).then((user) => {
                switch(user.status) {
                    case 200: 
                        localStorage.setItem('ProliteToken', user.data.token);
                        dispatch(signinSuccess(payload));
                        break;
                    case 404: 
                        dispatch({type: types.USER_NOT_FOUND});
                        break;
                    case 401:
                        dispatch({type: types.INCORRECT_CREDENTIALS});
                        break;
                    default:
                        dispatch({type: types.SERVER_ERROR});
                        console.log('signin error >>>>', user);
                        break;

                }
            }).catch(err => {
                console.log('apiError >>>', err);
            })
        }
    }