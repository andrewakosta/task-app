import React, { useReducer } from 'react'
import randomId from '../../helpers/getIdRamdom'
import TaskReducer from './TaskReducer'
import TaskContext from './TaskContext'
import clientAxios from '../../config/axios'
import {
    PROJECT_TASKS,
    ADD_TASK,
    ERROR_TASK,
    DELETE_TASK,
    STATUS_TASK,
    SET_CURRENT_TASK,
    UPDATE_TASK
} from '../../types/index'


const TaskState = props => {
    const initialState = {
        projectTasks:[],
        errorStatus:false,
        currentTask:null
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
    const addTask = async task => {
        try {
            console.log(task)
            const response  = await clientAxios.post('/api/tasks', task)
            console.log(response)
            dispatch({
                type:ADD_TASK,
                payload:task
            })
        } catch (error) {
            console.log('Maldita sea a donde se fue el objecto')
        }
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
    //Set a current task 
    const setCurrentTask = task => {
        dispatch({
            type:SET_CURRENT_TASK,
            payload:task
        })
    }
    const updateTask = task => {
        dispatch({
            type:UPDATE_TASK,
            payload:task
        })
    }
    return (
        <TaskContext.Provider
            value= {{
                projectTasks: state.projectTasks,
                errorStatus:state.errorStatus,
                currentTask:state.currentTask,
                getTasks,
                addTask,
                errorTask,
                deleteTaskById,
                changeStatusTask,
                setCurrentTask,
                updateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )    
}

export default TaskState