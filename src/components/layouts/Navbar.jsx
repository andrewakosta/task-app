import React from 'react'
const Navbar = () => {
    return ( 
        <header className='app-header'>
            <p className='nombre-usuario'>Hello <span>Andres Acosta</span></p>
            <nav className='nav-principal'>
                <a href="#!"> Log out</a>
            </nav>
        </header>
     );
}
 
export default Navbar;