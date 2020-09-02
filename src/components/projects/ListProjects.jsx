import React from 'react'
import Projec from './Project';
const ListProjects = () => {
    const projects = [
        {name:'MongoDB'},
        {name:'Java EE'},
        {name:'React js'},
        {name:'Node js'}
    ]
    return ( 
        <ul className='listado-proyectos'>
            {projects.map( project => (
                <Projec project={project}/>
            ))}
        </ul>
     );
}
 
export default ListProjects;