import {
    PROJECT_TASKS
} from '../../types'

export default (state, action ) => {
    switch (action.type){
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(task => action.payload === task.projectId)
            }
        default:
            return state
    }
}