import React, {useContext} from 'react'

import ContextProject from '../../context/projects/ContextProject'
const TaskForm = () => {

    const {currentProject} = useContext(ContextProject)  
    
    if(!currentProject) return null

    const [project] = currentProject

    return ( 
        <div className="formulario">
            <h5>{project.name}</h5>
            <form >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className='input-text'
                        placeholder='Name of Task'
                        name='name'
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className='btn btn-primario btn-submit btn-block'
                        value='Add Task '
                    />
                </div>
            </form>
        </div>
     );
}
 
export default TaskForm;