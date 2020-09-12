import React, {useReducer} from 'react';
import alertReducer from './alertReducer'
import alertContext from './alertContext'

import {SHOW_ALERT, HIDDE_ALERT} from '../../types'

const AlertState = props => {
    const initialState = {
        alert:null
    }

    const [state, dispatch] = useReducer(alertReducer, initialState)

    //Show a message
    const showAlert = (msg, category) => {
        dispatch({
            type:SHOW_ALERT,
            payload:{
                msg,
                category
            }
        })
        //Hidden message after a couple of seconds 
        setTimeout(()=> {
            dispatch({
                type:HIDDE_ALERT
            })
        }, 5000)
    }

    return (
        <alertContext.Provider
            value={{
                alert:state.alert, 
                showAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}
export default AlertState