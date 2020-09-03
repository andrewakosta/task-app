import React from 'react'

import StateProject from './context/projects/StateProject'
import AppRouter from './routers/AppRouter'
const App = () => {
    return ( 
        <StateProject>
            <AppRouter/>      
        </StateProject>

     );
}
 
export default App;