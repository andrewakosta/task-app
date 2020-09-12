import {
    SSUCCESFUL_LOGIN,
    SSUCCESFUL_REGISTER,
    ERROR_REGISTER,
    ERROR_LOGIN,
    GET_USER,
    LOGOUT
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case SSUCCESFUL_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state, 
                authenticated:true,
                message:null
            }
        case ERROR_REGISTER:  
            return{
                ...state, 
                token: null,
                message:action.payload
            }
        default:
            return state
    }
}