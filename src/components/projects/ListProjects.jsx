import React, {useContext} from 'react'
import Projec from './Project';

import StateProject from '../../context/projects/ContexProject'
const ListProjects = () => {

    const {projects} = useContext(StateProject)

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