import React, {useContext} from 'react'

import ContextProject from '../../context/projects/ContextProject'
import Task from './Task'
const ListTasks = () => {

    const {currentProject, deleteProject} =  useContext(ContextProject)
    if(!currentProject){
        return <h2>Please choose one project</h2>
    } 
    const [project] = currentProject
    //List tasks
    const tasks = []
    const deleteProject_= () => {
        deleteProject(project.id)
    }
    return ( 
        <>
            <h2>{project.name}</h2>
            <ul className='listado-tareas'>
                {
                    tasks.length === 0 
                ?
                    (
                        <li className="tarea">There are not tasks</li>
                    )
                : 
                    tasks.map(task => (
                        <Task 
                            task={task}
                        />
                    ))
                } 
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={deleteProject_}
            >
                Delete Project
            </button>
        </>
     );
}
 
export default ListTasks;