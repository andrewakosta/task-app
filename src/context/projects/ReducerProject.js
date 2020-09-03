import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATE,
    CURRENT_PROJECT
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case FORM_PROJECT:
            return {
                ...state,
                form:true
            }
        case GET_PROJECTS:
            return{
                ...state,
                projects:action.payload
            } 
        case ADD_PROJECT:      
            return{
                ...state,
                projects:[
                    ...state.projects,
                    action.payload
                ],
                form:false,
                errorForm:false
            }
        case FORM_VALIDATE:
            console.log(state)
            return{
                ...state,
                errorForm:true
            }
        case CURRENT_PROJECT:
            return{
                ...state,
                currentProject:state.projects.filter( project => project.id === action.payload)
            }        
        default:
            return state
    }
}