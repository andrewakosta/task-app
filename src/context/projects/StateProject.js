import React, {useReducer} from 'react';

import idRandom from '../../helpers/getIdRamdom'
import ContextProject from './ContexProject'
import ReducerProject from './ReducerProject'
import {
        FORM_PROJECT,
        GET_PROJECTS,
        ADD_PROJECT,
        FORM_VALIDATE
        } from '../../types'

const StateProject = props =>{
    const projects = [
        {id:idRandom(), name:'MongoDB'},
        {id:idRandom(), name:'Java EE'},
        {id:idRandom(),name:'React js'},
        {id:idRandom(),name:'Node js'},
        {id:idRandom(),name:'Python 3.7'}
    ]
    const initialState = {
        form:false,
        projects : [],
        errorForm:false
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
    const addProject = project => {
        project.id= idRandom()
        dispatch({
            type:ADD_PROJECT,
            payload:project
        })
    }
    //Show error of empty field on name field
    const showError=()=>{
        dispatch({
            type:FORM_VALIDATE
        })
    }
    return (
        <ContextProject.Provider
            value={{
                form:state.form,
                errorForm:state.errorForm,
                projects: state.projects,
                //Functions
                showForm,
                getProjects,
                addProject,
                showError    
            }}
        >  
            {props.children}
        </ContextProject.Provider>
   )
}
export default StateProject