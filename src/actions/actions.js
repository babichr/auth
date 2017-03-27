import axios from "axios";
import { browserHistory } from "react-router";
const USER_REGISTRATION = "USER_REGISTRATION";
const USER_LOGIN = "USER_LOGIN";
const USER_AUTH = "USER_AUTH";

export const userRegistration = ( value ) => {
    return (dispatch) => {
        axios.post("/api/user-registration", value)
            .then( ( response ) => {
                dispatch({
                    type : USER_REGISTRATION,
                    payload: response,
                })
            } )
    .catch( ( response ) => console.log(response) )
    }
};


export const userLogin = ( value ) => {
    return (dispatch) => {
        axios.post("/api/user-login", value )
            .then( ( response ) => {
                let token = response.data.token;
                let id = response.data.user._id;
                localStorage.setItem( "token",  token );
                dispatch({
                    type: USER_LOGIN,
                    payload: response
                });
                browserHistory.push(`/user/${id}`);
            })
            .catch( (response) => console.log(response) )
    }
};

export const authUserData = ( id ) => {
    let storageToken = localStorage.getItem("token");
    let token = { token: storageToken };
    console.log(storageToken);
    return ( dispatch ) => {
        axios.post( `/api/user/${id}`, token)
            .then( ( response ) => {
                dispatch({
                    type: USER_AUTH,
                    payload: response
                });
            })
        }
};

