import {
    PROJECT_TASKS
} from '../../types'

export default (state, action ) => {
    switch (action.type){
        case PROJECT_TASKS:
            console.log(action.payload)
        default:
            return state
    }
}