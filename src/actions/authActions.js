import axios from 'axios'; //allow to send http request the server
import {GET_ERRORS} from './types'; //it's an action type registered in the types file
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import setCurrentUser from '../utils/setCurrentUser';

/**
 * 
 * @param userData array which receive form data from register component
 * @param dispatch this allow us to dispatch errors if the http request failed
 */

export const registerUser = (userData, history) => dispatch=>{
    axios.post('/api/users/register', userData).then(res=>history.push('/login'))
            .catch(error=>dispatch({
                type:GET_ERRORS,
                payload:error.response.data
            }));
}

//login user actions
export const loginUser = userData=>dispatch=>{
    axios.post('/api/users/login', userData).then(response=>{
        //extract token from the response and save it in local storage
        const { token } = response.data;
        //save to local storage
        localStorage.setItem('jwtToken', token);
        //create and set a token to the header
        setAuthToken(token);
        //decode token
        const decodedToken = jwt_decode(token);

        //set current user

        dispatch(setCurrentUser(decodedToken));
    }).catch(error=>dispatch({
        type:GET_ERRORS,
        payload:error.response.data
    }))
}

export const logoutUser = ()=>dispatch=>{
    //remove jwt token in the local storage
    localStorage.removeItem('jwtToken');

    //remove auth headers for future request
    setAuthToken(false);

    //set the setcurrentuser to empty object which will set isAuthenticated to false
    dispatch(setCurrentUser({}));

}