import React from 'react'

import StateProject from './context/projects/StateProject'
import TaskState from './context/tasks/TaskState'
import AppRouter from './routers/AppRouter'
const App = () => {
    return ( 
        <StateProject>
            <TaskState>
                <AppRouter/>
            </TaskState>
        </StateProject>

     );
}
 
export default App;