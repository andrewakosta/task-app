import React from 'react'

import StateProject from './context/projects/StateProject'
import TaskState from './context/tasks/TaskState'
import AppRouter from './routers/AppRouter'
import AlertState from './context/alerts/AlertState'
import AuthState from './context/auth/AuthState'
const App = () => {
    //Read properties file
   // console.log(process.env.REACT_APP_BACKEND_URL)
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