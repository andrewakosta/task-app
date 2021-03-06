import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Projects from '../components/projects/Projects'

const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/projects' component={Projects}/>
            </Switch>
        </Router>
     );
}
 
export default AppRouter;