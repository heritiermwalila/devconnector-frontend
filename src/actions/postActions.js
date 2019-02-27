import axios from 'axios'
import {ADD_POST, GET_ERRORS, GET_POSTS, GET_POST} from './types'

export const addPost = (postData) => dispatch =>{
    axios.post('/api/posts', postData)
    .then(res=>dispatch({
        type:ADD_POST,
        payload:res.data
    })).catch(error=>dispatch({
        type:GET_ERRORS,
        payload:error.response.data
    }))
}

export const getPosts = ()=>dispatch=>{
    axios.get('/api/posts')
        .then(res=>dispatch({
            type:GET_POSTS,
            payload:res.data
        })).catch(error=>dispatch({
            type:GET_POSTS,
            payload:null
        }))
}

export const getPost = (id) => dispatch =>{

    axios.get(`/api/posts/${id}`)
        .then(res=>dispatch({
            type:GET_POST,
            payload:res.data
        })).catch(error=>dispatch({
            type:GET_ERRORS,
            payload:null
        }))

}