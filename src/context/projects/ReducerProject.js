import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATE
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
        default:
            return state
    }
}