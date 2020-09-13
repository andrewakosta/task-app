import React from 'react'

import StateProject from './context/projects/StateProject'
import TaskState from './context/tasks/TaskState'
import AppRouter from './routers/AppRouter'
import AlertState from './context/alerts/AlertState'
import AuthState from './context/auth/AuthState'
import tokenAuth from './config/tokenAuth'

const App = () => {
    //Check of there is a token
    const token = localStorage.getItem('token')
    if(token){
        tokenAuth(token)
    }
    return ( 
        <StateProject>
            <TaskState>
                <AuthState>
                    <AlertState>
                         <AppRouter/>
                    </AlertState>
                </AuthState>
            </TaskState>
        </StateProject>

     );
}
 
export default App;