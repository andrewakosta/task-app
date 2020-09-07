import React, {useContext} from 'react'

import ContextProject from '../../context/projects/ContextProject'
import TaskContext from '../../context/tasks/TaskContext'
import Task from './Task'
const ListTasks = () => {

    const {currentProject, deleteProject} =  useContext(ContextProject)
    const {projectTasks} = useContext(TaskContext)
    if(!currentProject){
        return <h2>Please choose one project</h2>
    } 
    const [project] = currentProject




    const deleteProject_= () => {
        deleteProject(project.id)
    }
    return ( 
        <>
            <h2>{project.name}</h2>
            <ul className='listado-tareas'>
                {
                    projectTasks.length === 0 
                ?
                    (
                        <li className="tarea">There are not tasks</li>
                    )
                : 
                projectTasks.map(task => (
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