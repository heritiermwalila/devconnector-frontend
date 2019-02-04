import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../utils/isEmpty';

/**
 * @initialState it's a an initial state of the auth Reducer
 * @action coming from the action which is set in the component 
 * -----------------------
 *      PLEASE NOTE         
 * -----------------------
 * You don't need to pass the action in this reducer because the action is coming from the component
 */
const initialState = {
    isAuthenticated:false,
    user:{}
}

export default function (state = initialState, action){

    switch(action.type){
        case SET_CURRENT_USER:
        return{
            ...state,
            isAuthenticated:!isEmpty(action.payload),
            user:action.payload
        }
        default:
            return state;
    }

}