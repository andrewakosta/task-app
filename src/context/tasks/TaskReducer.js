import {
    PROJECT_TASKS, ADD_TASK, ERROR_TASK
} from '../../types'

export default (state, action ) => {
    switch (action.type){
        case ADD_TASK:
            console.log(action.payload)
            return {
                ...state,
                tasks:[
                    ...state.tasks,
                    action.payload
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