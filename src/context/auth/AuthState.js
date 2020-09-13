import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import clientAxios  from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'
import {
    SSUCCESFUL_LOGIN,
    SSUCCESFUL_REGISTER,
    ERROR_REGISTER,
    ERROR_LOGIN,
    GET_USER,
    LOGOUT
} from '../../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user:null,
        message:null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    //Funtions
    const registerUser = async data => {
        try{
            const response = await clientAxios.post('/api/users', data)
     
            dispatch({
                type:SSUCCESFUL_REGISTER,
                payload:response.data
            })
            //Get User
            userAuthenticated()
        }catch(error){
            const alert = {
                msg:error.response.data.msg,
                category:'alert-error'
            }
            dispatch({
                
                type:ERROR_REGISTER, 
                payload:alert
            })
        }
    }
    //Return the user authenticated
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }
        try {
            const response = await clientAxios.get('/api/auth')
            console.log(response)
            dispatch({
                type:GET_USER,
                payload:response.data.user
            })
        } catch (error) {
            dispatch({
                type:ERROR_LOGIN
            })
        }
    }

    //Log in
    const initSeccion  = async data => {
        try{
            const resposne = await clientAxios.post('/api/auth', data)
            console.log(resposne)
        }catch(error){
            console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg, 
                category: 'alert-error'
            }
            
            dispatch({
                type:ERROR_LOGIN, 
                payload:alert
            })
        }
    }
    return (
        <authContext.Provider
            value={{
                token:state.token,
                authenticated:state.authenticated,
                user:state.user,
                message:state.message,
                registerUser, 
                initSeccion
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState