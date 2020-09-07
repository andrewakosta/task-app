import React, {useContext} from 'react';

import ContextProject from '../../context/projects/ContextProject'
import TaskContext from '../../context/tasks/TaskContext'


const Projec = ({project}) => {
    const {getTasks} = useContext(TaskContext)
    const {setCurrentProject} = useContext(ContextProject)

    //Handle the click on the button 
    const handleClick = () => {
        setCurrentProject(project.id)
        getTasks(project.id)
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