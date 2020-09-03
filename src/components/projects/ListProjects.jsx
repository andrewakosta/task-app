import React, {useContext, useEffect} from 'react'
import Projec from './Project';

import StateProject from '../../context/projects/ContextProject'
const ListProjects = () => {

    const {projects, getProjects} = useContext(StateProject)
    
    useEffect(() => {

        getProjects()
    },[])
    
    return ( 
        <ul className='listado-proyectos'>
            {projects.map( project => (
                <Projec
                    key={project.id} 
                    project={project}
                />
            ))}
        </ul>
     );
}
 
export default ListProjects;