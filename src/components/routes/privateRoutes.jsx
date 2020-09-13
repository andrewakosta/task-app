import React, {Component, useContext, useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import authContext from '../../context/auth/authContext'

const PrivateRoute = ({component: Component, ...props})=> {
    const {authenticated, loading, userAuthenticated} = useContext(authContext)
    useEffect(() => {
        userAuthenticated()
    },[])
    return(
        <Route {...props} render={props => !authenticated && !loading ? (
            <Redirect to='/' />

        )
        :
        (
            <Component {...props}/>
        )
    
    }/>
    )
}
export default PrivateRoute