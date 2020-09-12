import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
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

    return (
        <authContext.Provider
            value={{
                token:state.token,
                authenticated:state.authenticated,
                user:state.user,
                message:state.message
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState