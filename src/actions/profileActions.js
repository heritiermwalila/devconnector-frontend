import axios from 'axios'
import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER } from './types'


//get profile for logged in user
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

//create profile
export const createProfile = (profileData, history) => dispatch=>{

    axios.post('/api/profile', profileData)
        .then(res=>history.push('/dashboard'))
        .catch(err=>
            dispatch(
                {
                    type:GET_ERRORS,
                    payload:err.response.data
                }
    ))

}

export const deleteAccount = ()=>dispatch=>{

    if(window.confirm('Are you sure you want to delete your account?')){
        axios.delete('/api/profile').then(response=>dispatch({
            type:SET_CURRENT_USER,
            payload:{}
        })).catch(err=>dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        }))
    }
    
}

export const addExperience = (data, history)=>dispatch=>{

    axios.post('/api/profile/experience', data)
        .then(response=>history.push('/dashboard'))
        .catch(err=>dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        }))
}

export const addEducation = (data, history)=>dispatch=>{
    axios.post('/api/profile/education', data)
    .then(res=>history.push('/dashboard'))
    .catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
}

export const deleteExperience = (id)=>dispatch=>{
    axios.delete(`/api/profile/experience/${id}`)
    .then(res=>dispatch({
        type:GET_PROFILE,
        payload:res.data
    })).catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
}

export const deleteEducation = (id)=>dispatch=>{
    axios.delete(`/api/profile/education/${id}`)
    .then(res=>dispatch({
        type:GET_PROFILE,
        payload:res.data
    })).catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
}

export const getProfiles = ()=>dispatch=>{
    dispatch(setProfileLoading())
    axios.get('/api/profile/all').then(res=>{
        dispatch({
            type:GET_PROFILES,
            payload:res.data
        })
    }).catch(error=>dispatch({
        type:GET_PROFILES,
        payload:null
    }))
}

export const getProfileByHandle = (handle)=>dispatch=>{
    axios.get(`/api/profile/handle/${handle}`)
        .then(res=>dispatch({
            type:GET_PROFILE,
            payload:res.data
        })).catch(error=>dispatch({
            type:GET_PROFILE,
            payload:null
        }))
}