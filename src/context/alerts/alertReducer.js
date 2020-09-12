import {SHOW_ALERT, HIDDE_ALERT} from '../../types'

export default (state, action) => {

    switch(action.type){
        case SHOW_ALERT:
            return {
                alert:action.payload
            }
        case HIDDE_ALERT:
            return{
                alert:null
            }    
        default:
            return state
    }
}