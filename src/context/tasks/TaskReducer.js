import {
    PROJECT_TASKS, ADD_TASK, ERROR_TASK, DELETE_TASK, STATUS_TASK
} from '../../types'

export default (state, action ) => {
    switch (action.type){
        case STATUS_TASK:
            return {
                ...state,
                tasks:state.projectTasks.map(task => task.id === action.payload.id ? action.payload:task)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case ADD_TASK:
            console.log(action.payload)
            return {
                ...state,
                tasks:[
                    action.payload,
                    ...state.tasks                   
                ],
                errorStatus:false
            
            }
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(task => action.payload === task.projectId),
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