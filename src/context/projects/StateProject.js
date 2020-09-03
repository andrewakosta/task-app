import React, {useReducer} from 'react';

import ContextProject from './ContexProject'
import ReducerProject from './ReducerProject'
import {FORM_PROJECT} from '../../types'

const StateProject = props =>{
    const initialState = {
        form:false
    } 
    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(ReducerProject, initialState) 

    //CRUD
    const showForm =()=>{
        dispatch({
            type: FORM_PROJECT
        })
    }
    return (
        <ContextProject.Provider
            value={{
                form:state.form,
                showForm
            }}
        >  
            {props.children}
        </ContextProject.Provider>
   )
}
export default StateProject