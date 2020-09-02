import React from 'react'
import NewProjectForm from '../projects/NewProjectForm'
import ListProjects from '../projects/ListProjects'
const Sidbar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <NewProjectForm/>
            <div className="proyectos">
                <h2>Your projects</h2>
                    <ListProjects/>
            </div>
        </aside>
     );
}
 
export default Sidbar;