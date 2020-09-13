import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Projects from '../components/projects/Projects'
import PrivateRoute from '../components/routes/privateRoutes'

const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <PrivateRoute exact path='/projects' component={Projects}/>
            </Switch>
        </Router>
     );
}
 
export default AppRouter;