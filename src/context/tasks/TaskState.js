import React, { useReducer } from 'react'

import TaskReducer from './TaskReducer'
import TaskContext from './TaskContext'


const TaskState = props => {
    const initialState = {
        tasks:[]
    }

    const [state, dispatch] =  useReducer(TaskReducer, initialState)

    return (
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )    
}

export default TaskState