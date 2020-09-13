import React, {Component, useContext, useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import authContext from '../../context/auth/authContext'

const PrivateRoute = ({component: Component, ...props})=> {
    const {authenticated} = useContext(authContext)

    return(
        <Route {...props} render={props => !authenticated ? (
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