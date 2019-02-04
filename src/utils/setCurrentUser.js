import { SET_CURRENT_USER } from "../actions/types";

const setCurrentUser = (decodedToken)=>{

    return {
        type:SET_CURRENT_USER,
        payload:decodedToken
    }

}

export default setCurrentUser;