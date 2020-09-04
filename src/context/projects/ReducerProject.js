import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATE,
    CURRENT_PROJECT,
    DELETE_PROJECT
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
        case DELETE_PROJECT:
            console.log(state.projects)
            return{
                ...state,
                projects:state.projects.filter(project => project.id !== action.payload), 
                currentProject: null
            }          
        default:
            return state
    }
}