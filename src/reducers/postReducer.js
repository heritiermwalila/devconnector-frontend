import { ADD_POST, GET_POSTS, GET_POST, ADD_COMMENT } from "../actions/types";

const initialState = {
    posts:[],
    post:{},
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts:[action.payload, ...state.posts]
            }
        case GET_POSTS:
            return {
                ...state,
                posts:action.payload,
                loading:false
            }

        case GET_POST:
            return {
                ...state,
                post:action.payload,
                loading:false
            }
        case ADD_COMMENT:
            return{
                ...state,
                post:{...state.post, comments:[...state.post.comments, action.payload]}
            }
        default:
        return state;
    }
}