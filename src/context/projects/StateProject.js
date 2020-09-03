import React, {useReducer} from 'react';

import ContextProject from './ContexProject'
import ReducerProject from './ReducerProject'

const StateProject = props =>{
    const initialState = {
        form:true
    } 
    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(ReducerProject, initialState) 

    return (
        <ContextProject.Provider
            value={{
                form:state.form
            }}
        >  
            {props.children}
        </ContextProject.Provider>
   )
}
export default StateProject