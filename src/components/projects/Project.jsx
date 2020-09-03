import React, {useContext} from 'react';

import ContextProject from '../../context/projects/ContextProject'


const Projec = ({project}) => {
    const {setCurrentProject} = useContext(ContextProject)
    const handleClick = () => {
        setCurrentProject(project.id)
    }
    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={handleClick}
            >
                {project.name}
            </button>
        </li>
     );
}
 
export default Projec;