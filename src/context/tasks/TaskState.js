import React, { useReducer } from 'react'

import TaskReducer from './TaskReducer'
import TaskContext from './TaskContext'
import {
    PROJECT_TASKS,
    ADD_TASK,
    ERROR_TASK
} from '../../types/index'


const TaskState = props => {
    const initialState = {
        tasks:[
            {name:'Choose the server', status:false, projectId:1},
            {name:'add every coder to buil porject', status:true,projectId:2},
            {name:'make the desing to porejct', status:false, projectId:3},
            {name:'Choose the server', status:false, projectId:4},
            {name:'add every coder to buil porject', status:true, projectId:2},
            {name:'make the desing to porejct', status:false, projectId:2},
            {name:'Choose the server', status:false, projectId:1},
            {name:'add every coder to buil porject', status:true,projectId:2},
            {name:'make the desing to porejct', status:false, projectId:3},
            {name:'Choose the server', status:false, projectId:1},
            {name:'add every coder to buil porject', status:true, projectId:3},
            {name:'make the desing to porejct', status:false, projectId:2},
            {name:'Choose the server', status:false, projectId:3},
            {name:'add every coder to buil porject', status:true,projectId:1},
            {name:'make the desing to porejct', status:false, projectId:4},
            {name:'Choose the server', status:false, projectId:2},
            {name:'add every coder to buil porject', status:true, projectId:1},
            {name:'make the desing to porejct', status:false, projectId:2},
            {name:'Choose the server', status:false, projectId:4},
            {name:'add every coder to buil porject', status:true,projectId:1},
            {name:'make the desing to porejct', status:false, projectId:2},
            {name:'Choose the server', status:false, projectId:3},
            {name:'add every coder to buil porject', status:true, projectId:3},
            {name:'make the desing to porejct', status:false, projectId:2}
        ],
        projectTasks:null,
        errorStatus:false
    }

    const [state, dispatch] =  useReducer(TaskReducer, initialState)

    //Get tasks
    const getTasks = projectId =>{
        dispatch({
            type:PROJECT_TASKS,
            payload:projectId
        })
    }
    //Add task
    const addTask = task => {
        
        dispatch({
            type:ADD_TASK,
            payload:task
        })
    }
    const errorTask = () => {
        dispatch({
            type:ERROR_TASK,
        })
    }
    return (
        <TaskContext.Provider
            value= {{
                tasks:state.tasks,
                projectTasks: state.projectTasks,
                errorStatus:state.errorStatus,
                getTasks,
                addTask,
                errorTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )    
}

export default TaskState