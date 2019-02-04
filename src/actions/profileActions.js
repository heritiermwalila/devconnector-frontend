import axios from 'axios'
import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, PROFILE_NOT_FOUND, CLEAR_CURRENT_PROFILE } from './types'



export const getProfile = (userData) => dispatch=>{

    dispatch(setProfileLoading())
    axios.get('/api/profile').then(res=>{
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    }).catch(err=>dispatch({
        type:GET_PROFILE,
        payload:{}
    }))

}

//set profile loading 
export const setProfileLoading = () =>{
    return {
        type:PROFILE_LOADING
    }
}

//clear profile
export const clearCurrentProfile = ()=>{
    return{
        type:CLEAR_CURRENT_PROFILE
    }
}