import {
    PROJECT_TASKS, ADD_TASK, ERROR_TASK, DELETE_TASK, SET_CURRENT_TASK, UPDATE_TASK
} from '../../types'

export default (state, action ) => {
    switch (action.type){
        case SET_CURRENT_TASK:
            return {
                ...state,
                currentTask:action.payload
            }
        case UPDATE_TASK:
            console.log(action.payload)    
            return {
                ...state,
                projectTasks:state.projectTasks.map(task => task._id === action.payload._id ? action.payload:task),
                currentTask:null
            }
        case DELETE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.filter(task => task._id !== action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                projectTasks:[
                    action.payload,
                    ...state.projectTasks                   
                ],
                errorStatus:false
            }
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: action.payload
            }
        case ERROR_TASK: 
            return {
                ...state,
                errorStatus:true
            }
        default:
            return state
    }
}