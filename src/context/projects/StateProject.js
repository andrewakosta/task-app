import React, {useReducer} from 'react';

import idRandom from '../../helpers/getIdRamdom'
import ContextProject from './ContexProject'
import ReducerProject from './ReducerProject'
import {
        FORM_PROJECT,
        GET_PROJECTS,
        ADD_PROJECT
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
    const addProject = project => {
        project.id= idRandom()
        dispatch({
            type:ADD_PROJECT,
            payload:project
        })
    }
    return (
        <ContextProject.Provider
            value={{
                form:state.form,
                showForm,
                getProjects,
                addProject,
                projects: state.projects
            }}
        >  
            {props.children}
        </ContextProject.Provider>
   )
}
export default StateProject