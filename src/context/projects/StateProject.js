import React, {useReducer} from 'react';

import idRandom from '../../helpers/getIdRamdom'
import ContextProject from './ContextProject'
import ReducerProject from './ReducerProject'
import {
        FORM_PROJECT,
        GET_PROJECTS,
        ADD_PROJECT,
        FORM_VALIDATE,
        CURRENT_PROJECT,
        DELETE_PROJECT
        } from '../../types'

const StateProject = props =>{
    const projects = [
        {id:1, name:'MongoDB'},
        {id:2, name:'Java EE'},
        {id:3,name:'React js'},
        {id:4,name:'Node js'},
    ]
    const initialState = {
        form:false,
        projects : [],
        errorForm:false,
        currentProject:null
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
    //Set the current project
    const setCurrentProject = projectId => {
        dispatch({
            type:CURRENT_PROJECT,
            payload:projectId
        })
    }
    //Delte a project
    const deleteProject  = projectId =>{
       
        dispatch({
            type:DELETE_PROJECT,
            payload:projectId
        })
    }
    return (
        <ContextProject.Provider
            value={{
                form:state.form,
                errorForm:state.errorForm,
                projects: state.projects,
                currentProject:state.currentProject,
                //Functions
                showForm,
                getProjects,
                addProject,
                showError, 
                setCurrentProject,
                deleteProject  
            }}
        >  
            {props.children}
        </ContextProject.Provider>
   )
}
export default StateProject