import React from 'react'
import NewProjectForm from '../projects/NewProjectForm'
const Sidbar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <div className="proyectos">
                <h2>Your projects</h2>
                <NewProjectForm/>
            </div>
        </aside>
     );
}
 
export default Sidbar;