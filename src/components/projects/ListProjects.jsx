import React, {useContext, useEffect} from 'react'
import Projec from './Project';

import StateProject from '../../context/projects/ContextProject'
const ListProjects = () => {

    const {projects, getProjects} = useContext(StateProject)
    
    useEffect(() => {

        getProjects()
    },[])
    if(projects.length===0)return <h3 className='message-g'>Make a project</h3>
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