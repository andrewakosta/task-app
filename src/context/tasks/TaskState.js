import React, { useReducer } from 'react'

import TaskReducer from './TaskReducer'
import TaskContext from './TaskContext'
import {
    PROJECT_TASKS
} from '../../types/index'


const TaskState = props => {
    const initialState = {
        tasks:[
            {name:'Choose the server', status:false,},
            {name:'add every coder to buil porject', status:true},
            {name:'make the desing to porejct', status:false},
            {name:'Choose the server', status:false},
            {name:'add every coder to buil porject', status:true},
            {name:'make the desing to porejct', status:false}
            
        ]
    }

    const [state, dispatch] =  useReducer(TaskReducer, initialState)

    //Get tasks
    const getTasks = projectId =>{
        dispatch({
            type:PROJECT_TASKS,
            payload:projectId
        })
    }
    return (
        <TaskContext.Provider
            value= {{
                tasks:state.tasks,
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )    
}

export default TaskState