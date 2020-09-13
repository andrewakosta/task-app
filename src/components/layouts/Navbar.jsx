import React, {useContext, useEffect} from 'react'

import authContext from '../../context/auth/authContext'
import { LOGOUT } from '../../types'

const Navbar = () => {

    //Extract information from context auth
    const {user, userAuthenticated, logout} = useContext(authContext)
    useEffect(()=> {
        userAuthenticated()
    },[])
    return ( 
        <header className='app-header'>
            <p className='nombre-usuario'>Hello <span>
                {
                    user
                ?
                    user.name
                :
                    null    
                
                }</span></p>
            <nav className='nav-principal'>
                <button
                    className='btn btn-blank logout'
                    onClick={()=> logout()}
                >
                    Log out
                </button>
            </nav>
        </header>
     );
}
 
export default Navbar;