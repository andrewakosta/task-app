import React, { useReducer } from 'react'
import randomId from '../../helpers/getIdRamdom'
import TaskReducer from './TaskReducer'
import TaskContext from './TaskContext'
import {
    PROJECT_TASKS,
    ADD_TASK,
    ERROR_TASK,
    DELETE_TASK,
    STATUS_TASK
} from '../../types/index'


const TaskState = props => {
    const initialState = {
        tasks:[
            {id:randomId(),  name:'Choose the server', status:false, projectId:1},
            {id:randomId(),  name:'add every coder to buil porject', status:true,projectId:2},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:3},
            {id:randomId(),  name:'Choose the server', status:false, projectId:4},
            {id:randomId(),  name:'add every coder to buil porject', status:true, projectId:2},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:2},
            {id:randomId(),  name:'Choose the server', status:false, projectId:1},
            {id:randomId(),  name:'add every coder to buil porject', status:true,projectId:2},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:3},
            {id:randomId(),  name:'Choose the server', status:false, projectId:1},
            {id:randomId(),  name:'add every coder to buil porject', status:true, projectId:3},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:2},
            {id:randomId(),  name:'Choose the server', status:false, projectId:3},
            {id:randomId(),  name:'add every coder to buil porject', status:true,projectId:1},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:4},
            {id:randomId(),  name:'Choose the server', status:false, projectId:2},
            {id:randomId(),  name:'add every coder to buil porject', status:true, projectId:1},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:2},
            {id:randomId(),  name:'Choose the server', status:false, projectId:4},
            {id:randomId(),  name:'add every coder to buil porject', status:true,projectId:1},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:2},
            {id:randomId(),  name:'Choose the server', status:false, projectId:3},
            {id:randomId(),  name:'add every coder to buil porject', status:true, projectId:3},
            {id:randomId(),  name:'make the desing to porejct', status:false, projectId:2}
        ],
        projectTasks:null,
        errorStatus:false
    }

    const [state, dispatch] =  useReducer(TaskReducer, initialState)

    //Get tasks
    const getTasks = projectId =>{
        console.log(projectId)
        dispatch({
            type:PROJECT_TASKS,
            payload:projectId
        })
    }
    //Add task
    const addTask = task => {
        
        dispatch({
            type:ADD_TASK,
            payload:{
                ...task,
                id:randomId()
            }
        })
    }
    const errorTask = () => {
        dispatch({
            type:ERROR_TASK,
        })
    }
    //delete a task by ID
    const deleteTaskById = taskId => {
        dispatch({
            type:DELETE_TASK,
            payload:taskId
        })
    }
    //Change status to a task
    const changeStatusTask = task => {
        dispatch({
            type:STATUS_TASK,
            payload:task
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
                errorTask,
                deleteTaskById,
                changeStatusTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )    
}

export default TaskState