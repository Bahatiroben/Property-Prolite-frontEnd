import types from "./actionTypes";
const baseUrl = process.env.baseUrl
export function loadUsersSuccess ({email, password}){
    return { 
        type: types.SIGN_IN,
        user: {email, password}
     }
}
export function signUp (payload) {
        return (dispatch) => {
            return fetch(`${baseUrl}/api/v1/auth/signup`, { //
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
                if(user.status == 201){
                    localStorage.setItem('ProliteToken', user.data.token);
                    dispatch(loadUsersSuccess(payload))
                } else {
                      console.log('authorizaton error >>>>', user)
                }
            }).catch(err => {
                console.log('apiErroe >>>', err);
            })
        }
    }