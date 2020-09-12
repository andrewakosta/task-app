import React from 'react'

import StateProject from './context/projects/StateProject'
import TaskState from './context/tasks/TaskState'
import AppRouter from './routers/AppRouter'
import AlertState from './context/alerts/AlertState'
const App = () => {
    return ( 
        <StateProject>
            <TaskState>
                <AlertState>
                    <AppRouter/>
                </AlertState>
            </TaskState>
        </StateProject>

     );
}
 
export default App;