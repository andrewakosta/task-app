import React, {useReducer} from 'react';

import ContextProject from './ContexProject'
import ReducerProject from './ReducerProject'
import {
        FORM_PROJECT,
        GET_PROJECTS
        } from '../../types'

const StateProject = props =>{
    const projects = [
        {id:1, name:'MongoDB'},
        {id:2, name:'Java EE'},
        {id:3,name:'React js'},
        {id:4,name:'Node js'},
        {id:5,name:'Python 3.7'}
    ]
    const initialState = {
        form:false,
        projects : []
    } 
    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(ReducerProject, initialState) 

    //CRUD
    const showForm =()=>{
        dispatch({
            type: FORM_PROJECT
        })
    }
    //Get projects
    const getProjects = () => {
        dispatch({
            type:GET_PROJECTS,
            payload:projects
        })
    }
    return (
        <ContextProject.Provider
            value={{
                form:state.form,
                showForm,
                getProjects,
                projects: state.projects
            }}
        >  
            {props.children}
        </ContextProject.Provider>
   )
}
export default StateProject